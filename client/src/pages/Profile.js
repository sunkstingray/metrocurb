import React, { Component } from "react";
import Card from "./../components/Card";

import axios from 'axios';

class Profile extends Component {
  state = {
    page:"Profile",
    contents:[""]
  }

  componentDidMount() {
 
  }

  componentWillUpdate(){
  
  }

  loadContent = () => {
    console.log(this.props.user);
    
      axios.get('/api/users',{
          params: {
            id: this.props.user._id
          }
        },function(response){
        console.log("hi");
      })
         

    }
  
  render(){
    return this.props.user !== null ? (
      <div className="container">
        <Card>
          <h3>{this.props.user.local.username}</h3>
          <h3>{this.props.user.loggedIn}</h3>
          {this.loadContent()}
          {this.state.contents.map(paragraph => (          
            <p>{paragraph}</p>
          ))}
        </Card>
      </div>
    ) : <div className="container"></div>;
  }
}
export default Profile;



// User.findOne({ 'local.username': this.props.user.local.username}, (err, user) => {
//         if (err) {
//             return console.log(err);
//         }
//         console.log(JSON.stringify(user));
//         const zohoId = user.zohoId;

//       })