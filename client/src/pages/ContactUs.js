import React, { Component } from "react";
import Card from "./../components/Card";
import API from "../utils/API";

class ContactUs extends Component {
  state = {
    page:"ContactUs",
    contents:[
      {
        value: "Address", 
        attribute: "12345 Main St. "
      }, {
        value: "City", 
        attribute: "Overland Park", 
      }, {
        value: "State", 
        attribute: "KS", 
      }, {
        value: "Zip Code", 
        attribute: "66324"
      }
    ]
  }

  componentDidMount() {
    this.loadContent("ContactUs");
  }

  loadContent = (page) => {
    //do something to get the content for homepage from MongoDB and save it as the current state
    API.getContent(page)
      .then(result => {
        console.log(result.data.content);
        this.setState({
          contents: result.data.content
        })
    }).catch(err => console.log(err))
  }

  render(){
    return(
      <div className="container">
        <h4>Contact Me:</h4>
        <form action="mailto:jnguye89@gmail.com" method="post" enctype="text/plain">
            Name:<br />
            <input type="text" name="name" /><br />
            E-mail:<br />
            <input type="text" name="mail" /><br />
            Comment:<br />
            <input type="text" name="comment" size="50" /><br /><br />
            <input type="submit" className="btn-large blue-grey lighten-5" value="Send" />
            <input type="reset" className="btn-large blue-grey lighten-5" value="Reset" />
        </form>
      </div>
    )
  }
}
export default ContactUs;
