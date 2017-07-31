import React from "react";

const Form = () => (

	<div>
      <form action="/api/form" method="post">
        <label>
          Player 1:
          <br />
          <input
            name="player1"
            type="text"
            id="data1" />
             <br />
            <input type="submit" value="Submit" />
        </label>
        </form>
     </div>
	)

module.exports=  Form;