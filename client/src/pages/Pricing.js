import React, { Component } from "react";
import Card from "./../components/Card";
import axios from "axios";

class Pricing extends Component {
  state = {
    page:"Pricing",
    contents:[
      "Weekly Cleaning: $364/year (Our beat deal!!)", 
      "Bi-Weekly Cleaning: $250/year", 
      "Monthly Cleaning: $199/year", 
      "Alternating Months: $99/year", 
      "Quarterly Cleaning: $75/year", 
      "Single Cleaning: $25", 
    ]
  }

  componentDidMount() {
    this.loadContent();
  }

  loadContent = () => {
    //do something to get the content for homepage from MongoDB and save it as the current state
    axios.get("/api/content", {
      component: this.state.page
    }).then(result => {
      this.setState.contents = result.contents
    })
  }
  
  render(){
    return(
      <div className="container">
        
        <Card>
          <h1>Pricing</h1>
          <ul>
            {this.state.contents.map(paragraph => (          
              <li>{paragraph}</li>
            ))}
          </ul>
          <h4>Rates listed above are for 2 bins (1 trash & 1 recycle)</h4>
        </Card>
      </div>
    )
  }
}
export default Pricing;
