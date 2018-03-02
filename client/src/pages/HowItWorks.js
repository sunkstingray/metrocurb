import React, { Component } from "react";
import Card from "./../components/Card";

class HowItWorks extends Component {
  state = {
    page:"HowItWorks",
    contents:[
      "Trash bins are lifted into the washing position by a lift.",
      "The inside of the bin is blasted with hot water.",
      "During the cleaning process, the operator uses a hand-held, high pressure washer to clean the exterior and the lid.",
      "The bin is then lowered, vacuumed, wiped, sanitized and deodorized.",
      "All waste water is collected and filtered by us (so no worries about it getting in your yard, driveway or down the drain).",
      "Believe it or not, it actually takes a very small amount of water to thoroughly clean & sanitize each unit (if you did the cleaning yourself, you'd use about 27 gallons each time!).",
      "The process we use is automated and fully contained, so no run-off enters the storm drains or your yard.",
      "All products we use are biodegradable."
    ]
  }

  componentDidMount() {
    // this.loadContent();
  }

  // loadContent = (this.state.page) => {
  //   //do something to get the content for homepage from MongoDB and save it as the current state
  // }
  
  render(){
    return(
      <div className="container">
        <Card>
          <h1>How It Works</h1>
          <ol>
            {this.state.contents.map(paragraph => (          
              <li>{paragraph}</li>
            ))}
          </ol>
        </Card>
      </div>
    )
  }
}
export default HowItWorks;
