import React, { Component } from "react";
import Card from "./../components/Card";
import API from "../utils/API";

class ContactUs extends Component {

  render(){
    return(
      <div className="container">
        <Card>
          <h4>Contact Me:</h4>
          <form action="mailto:jnguye89@gmail.com" method="post" enctype="text/plain">
              Name:<br />
              <input type="text" name="name" /><br />
              E-mail:<br />
              <input type="text" name="mail" /><br />
              Comment:<br />
              <input type="text" name="comment" size="50" /><br /><br />
              <input type="submit" className="btn blue-grey lighten-2" value="Send" />
              <input type="reset" className="btn blue-grey lighten-2" value="Reset" />
          </form>
        </Card>
      </div>
    )
  }
}
export default ContactUs;
