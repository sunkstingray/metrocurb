import React, { Component } from "react";
import Card from "./../components/Card";
import API from "../utils/API";

class Pricing extends Component {
  state = {
    page:"Pricing",
    contents:[
      {
        value: 1, 
        attribute: "Weekly Cleaning: $364/year (Our beat deal!!)", 
      }, {
        value: 2, 
        attribute: "Bi-Weekly Cleaning: $250/year",
      }, {
        value: 3, 
        attribute: "Monthly Cleaning: $199/year",
      }, {
        value: 4, 
        attribute: "Alternating Months: $99/year", 
      }, {
        value: 5,
        attribute: "Quarterly Cleaning: $75/year", 
      }, {
        value: 6, 
        attribute: "test: test"
      }
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
