import React, { Component } from "react";
import Card from "./../components/Card";


import axios from 'axios';

class Profile extends Component {
  state = {
    page:"Profile",
    contents:[""],
    mode:"view",
    iFrame:"https://subscriptions.zoho.com/subscribe/6ebbfd08b4cde1f9e3d79454c55797d0a5e12fff46ccfe5bad482bf477cf719e/1"
  }

  componentDidMount() {
    this.loadContent();
    this.loadCreditCard();
    
  }

  componentWillReceiveProps(){

  }

  componentWillUpdate(){
  
  }

  componentWillMount(){

  }


  loadContent = () => {
    //console.log(this.props.user._id);
    const url ='/api/users/'+this.props.user._id;
      axios.get(url)
           .then(result => {
            const zohoId = result.data.zohoId;
            //console.log('zohoId: ' + zohoId);
            const zohoUrl = '/api/users/zoho/' + zohoId;
            axios.get(zohoUrl)
                  .then(result => {

                     this.setState({
                        "firstName" : result.data["First Name"],
                        "lastName"  : result.data["Last Name"],
                        "address"   : result.data["Mailing Street"],
                        "city"      : result.data["Mailing City"],
                        "state"     : result.data["Mailing State"],
                        "zip"       : result.data["Mailing Zip"],
                        "username"  : result.data["Email"]

                     })
                  })

          });
         

    }

  viewOrEdit = () => {
    if(this.state.mode === 'view'){
      return 'readOnly';
    }
    return ;
  }

  goToEdit = () => {
    this.setState ({
      mode: "edit"
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
  event.preventDefault()

    console.log(this.props.user._id);
    const url ='/api/users/'+this.props.user._id;
      axios.get(url)
           .then(result => {
            const zohoId = result.data.zohoId;
            console.log('zohoId: ' + zohoId);
            const zohoUrl = '/api/users/zoho/' + zohoId;
            axios.put(zohoUrl,{
                          firstName: this.state.firstName,
                          lastName: this.state.lastName,
                          address: this.state.address,
                          city: this.state.city,
                          state: this.state.state,
                          zip: this.state.zip,
                          username: this.state.username
                  })
                  .then(result => {

                     this.setState({
                        "firstName" : result.data["First Name"],
                        "lastName"  : result.data["Last Name"],
                        "address"   : result.data["Mailing Street"],
                        "city"      : result.data["Mailing City"],
                        "state"     : result.data["Mailing State"],
                        "zip"       : result.data["Mailing Zip"],
                        "username"  : result.data["Email"],
                        "mode"      : 'view'

                     })
                  })

          });
  }

  loadCreditCard = () => {
    const url ='/api/users/zoho/cc';
    console.log('Load Credit Card');
    axios.post(url,{
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      username: this.state.username
    })
         .then(result => {
           console.log("Result: ");
           console.log(result);
           this.setState({
             iFrame: result.data
           });
         })
         .catch(error=>{
           console.log(error);
         })
  }  
  

 

  render(){

   

    return this.props.user !== null ? (
         <div className="container">
          <Card>
            <h1>My Account (View)</h1>
            <h5><a href="#edit" onClick={this.goToEdit}>Click Here</a> to edit account details. </h5>
          <form>
             <div className="form-group">
              <label htmlFor="firstInput">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstInput"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                readOnly={this.viewOrEdit()}
                
                
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastInput">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastInput"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                readOnly={this.viewOrEdit()}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
                readOnly={this.viewOrEdit()}
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleChange}
                  readOnly={this.viewOrEdit()}
                
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <select
                  id="inputState"
                  className="form-control"
                  name="state"
                  value={this.state.state}
                  onChange={this.handleChange}
                  readOnly={this.viewOrEdit()}
                >
                  <option>Kansas</option>
                  <option>Missouri</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputZip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputZip"
                  name="zip"
                  value={this.state.zip}
                  onChange={this.handleChange}
                  readOnly={this.viewOrEdit()}
                />
              </div>
            </div> 
            <div className="form-group">
              <label htmlFor="emailInput">Email address</label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                aria-describedby="emailHelp"
                name="username"
                value={this.state.username}
                readOnly
              />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
              
                {this.state.mode === 'edit' ? <button onClick={this.handleSubmit} className="btn btn-primary">Submit Account Changes</button> : <h1>view mode</h1>}
            
              
          </form>
          </Card>
          <Card className="iFrame">
            <iframe src={this.state.iFrame} title="zoho sub"></iframe>
          </Card>  
        </div>




    ) : <div className="container"></div>;
  }  
  
  
}
export default Profile;




/// CONTACTID
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