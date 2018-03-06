import React, { Component } from "react";
import Card from "./../components/Card";
import API from "../utils/API";

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
    this.loadContent("Pricing");
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
        
        <Card>
          <h1>Pricing</h1>
          <ul>
            {this.state.contents.map((paragraph,i) => (          
              <li key={i}>{paragraph.attribute}</li>
            ))}
          </ul>
          <h4>Rates listed above are for 2 bins (1 trash & 1 recycle)</h4>
        </Card>
      </div>
    )
  }
}
export default Pricing;
