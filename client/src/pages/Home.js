import React, { Component } from "react";
import Card from "./../components/Card";

class Home extends Component {
  constructor() {
    super()
    this.state = {
      page:"Home",
      contents:[
        ""
        
      ]
    }
  }


  componentDidMount() {
    // this.loadContent();
  }

  // loadContent = () => {
  //   //do something to get the content for homepage from MongoDB and save it as the current state
  // }
  
  render(){
    return(
      <div className="container">
        
        <Card>
          <div>
            <h1>Welcome to Metro Curbside Cleaning</h1>
            <br />
            <img src="./images/cleaner.png" />  
            {this.state.contents.map(paragraph => (          
              <h1>{paragraph}</h1>
            ))}
          </div>
        </Card>
      </div>
    )
  }
}
export default Home;

