import React, { Component } from "react";
import Card from "./../components/Card";
import API from "../utils/API";

class HowItWorks extends Component {
  state = {
    page:"HowItWorks",
    contents:[
      {
        value: 1, 
        attribute: "Trash bins are lifted into the washing position by a lift.", 
      }, {
        value: 2, 
        attribute: "The inside of the bin is blasted with hot water.", 
      }, {
        value: 3,
        attribute: "During the cleaning process, the operator uses a hand-held, high pressure washer to clean the exterior and the lid.", 
      }, {
        value: 4, 
        attribute: "The bin is then lowered, vacuumed, wiped, sanitized and deodorized.", 
      }, {
        value: 5, 
        attribute: "All waste water is collected and filtered by us (so no worries about it getting in your yard, driveway or down the drain).", 
      }, {
        value: 6, 
        attribute: "Believe it or not, it actually takes a very small amount of water to thoroughly clean & sanitize each unit (if you did the cleaning yourself, you'd use about 27 gallons each time!).", 
      }, {
        value: 7, 
        attribute: "Believe it or not, it actually takes a very small amount of water to thoroughly clean & sanitize each unit (if you did the cleaning yourself, you'd use about 27 gallons each time!).", 
      }, {
        value: 8, 
        attribute: "The process we use is automated and fully contained, so no run-off enters the storm drains or your yard.", 
      }, {
        value: 9,
        attribute: "All products we use are biodegradable."
      }
    ]
  }

  componentDidMount() {
    this.loadContent("HowItWorks");
  }

  loadContent = (page) => {
    //do something to get the content for homepage from MongoDB and save it as the current state
    API.getContent(page)
      .then(result => {
        // console.log(result.data.content);
        this.setState({
          contents: result.data.content
        })
    }).catch(err => console.log(err))
  }
  
  render(){
    return(
      <div className="container">
        <Card>
          <h1>How It Works</h1>
          <ol>
            {this.state.contents.map((paragraph,i) => (          
              <li key={i}>{paragraph.attribute}</li>
            ))}
          </ol>
        </Card>
      </div>
    )
  }
}
export default HowItWorks;
