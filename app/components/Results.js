import React from "react";
import queryString from 'query-string';
import api from "../utils/api";
import _ from "lodash"
/*import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';*/

class Results extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
        this.data = queryString.parse(this.props.location.search)
        }

/*        handleState() {
        this.setState(function(){
        _.forEach(this.data, (value,key) => {
            var newState={};
            api.fetchPlayer(value)
           .then(res => {
            newState[key] = res;
            return newState;
            console.log(newState)
        })
        })
    })}*/

  render() {

    const players = queryString.parse(this.props.location.search);
    const players1={player1: "aurelieuno"}



   var abc =  _.forEach(players, (value,key) => {
        api.fetchPlayer(value)
       .then(res => {
        var obj = {};
        obj[key] = res;
        return obj;
        console.log(obj)
    })
   })

console.log(abc)






    const state=this.state;

    return (
    <div>
    <p>hello</p>
    {!this.state? <p>loading</p> : <p>{JSON.stringify(this.state,null,2)}</p>}
    </div>
    )
  }
}

module.exports = Results;

/*{
username :res.login,
avatar_url: res.avatar_url ,
name: res.name ,
location: res.location ,
company: res.company ,
followers: res.followers ,
following: res.following ,
public_repos: res.public_repos ,
blog: res.blog
}*/

{/*    <div className="column">
    <img
    className="avatar"
    src={this.state.player1.avatar_url}
    alt={`Avatar for ${this.state.player1.username}`}
    />
    <h2 className="username">@{this.state.player1.username}</h2>
   <ul>
    {_.map(state,(el,key) =>
        <li key={el}>
        {key} : {el}
        </li>
        )}
    </ul>
    </div>*/}