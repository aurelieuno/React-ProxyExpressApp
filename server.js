var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require('mongoose');
var User = require('./models/User');
//===========================================================================
var app =  express();

//===========================================================================
var configDB = require('./config/database.js');
var dbURL = configDB.url;

//===========================================================================
mongoose.connect(dbURL);
var db = mongoose.connection;
db.on('error', function (err) {
  console.error('There was a db connection error');
  return  console.error(err.message);
});
db.once('connected', function () {
  return console.log('Successfully connected to ' + dbURL);
});
db.once('disconnected', function () {
  return console.error('Successfully disconnected from ' + dbURL);
});

//===========================================================================
app.use(bodyParser.urlencoded({ extended: true }));

//================== AJAX GET==============================
app.get('/api/data',function(req,res){

    User.find({},function(err, docs) {
      console.log(docs);
      if (err) { return next(err); }
      res.send(docs);
})
  });

//================== POST ==============================
app.post('/api/form',function(req,res){

  var name=req.body.player1;

  var contact = new User({name: name});
  contact.save(function (err, contact) {
    if (err) { return next(err); }
    console.log(contact);

    res.send("Sent!");
  });
});

//===========================================================================
var port = '5000';
app.set('port', port);

app.listen(port, function(){
  console.log(`Started on PORT ${port}`);
})
