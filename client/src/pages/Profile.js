import React, { Component } from "react";
import Card from "./../components/Card";


import axios from 'axios';

class Profile extends Component {
  state = {
    page:"Profile",
    contents:[""]
  }

  componentDidMount() {
    this.loadContent();
  }

  componentWillReceiveProps(){

  }

  componentWillUpdate(){
  
  }

  componentWillMount(){

  }


  loadContent = () => {
    console.log(this.props.user._id);
    const url ='/api/users/'+this.props.user._id;
      axios.get(url)
           .then(result => {
            const zohoId = result.data.zohoId;
            console.log('zohoId: ' + zohoId);
            const zohoUrl = '/api/users/zoho/' + zohoId;
            axios.get(zohoUrl)
                  .then(result => {
                     this.setState({
                        "FirstName" : result.data["First Name"]  
                     })
                  })
                 // .then(userData => {
                 //    console.log("userdata from zoho: ");
                 //    console.log(userData);
                 // })
          });
         

    }
  
  render(){
    return this.props.user !== null ? (
      <div className="container">
        <Card>
          <h3>{this.props.user.local.username}</h3>
          <h3>{this.props.user.loggedIn}</h3>
          
          <h3>{this.state.FirstName}</h3>
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

// CONTACTID
// :
// "3071280000000197009"
// Contact Owner
// :
// "Leo Galey"
// Created By
// :
// "Leo Galey"
// Created Time
// :
// "2018-03-06 17:07:04"
// Description
// :
// "Created from Express Route"
// Email
// :
// "12345@test.com"
// Email Opt Out
// :
// "false"
// First Name
// :
// "test"
// Full Name
// :
// "test testlastname"
// Last Name
// :
// "testlastname"
// Lead Source
// :
// "Online Store"
// MODIFIEDBY
// :
// "3071280000000143013"
// Mailing City
// :
// "test city"
// Mailing State
// :
// "Missouri"
// Mailing Street
// :
// "1234"
// Mailing Zip
// :
// "64060"
// Modified By
// :
// "Leo Galey"
// Modified Time
// :
// "2018-03-06 17:07:04"
// SMCREATORID
// :
// "3071280000000143013"
// SMOWNERID
// :
// "3071280000000143013"