import React, { Component } from "react";
import Card from "./../components/Card";

class Profile extends Component {
  state = {
    page:"Profile",
    contents:[""]
  }

  // componentDidMount() {
  //   this.loadContent();
  // }

  // loadContent = (this.state.page) => {
  //   //do something to get the content for homepage from MongoDB and save it as the current state
  // }
  
  render(){
    return(
      <div className="container">
        <Card>
          <h3>{JSON.stringify(this.props.user)}</h3>
          {this.state.contents.map(paragraph => (          
            <p>{paragraph}</p>
          ))}
        </Card>
      </div>
    )
  }
}
export default Profile;
