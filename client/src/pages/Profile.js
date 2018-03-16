import React, { Component } from "react";
import Card from "./../components/Card";
import {Row, Input} from "react-materialize"

import axios from 'axios';

class Profile extends Component {
  state = {
    page:"Profile",
    contents:[""],

    mode:"view",

    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    username: "",
    iFrame: "",
    updateCard: false

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
                        "username"  : result.data["Email"],
                        "trashday"  : result.data["Trash Day"],
                        "servicelevel": result.data["Service Level"],
                        "subscriptionId": result.data["Subscription ID"]

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

  editPayment = (event) => {
    event.preventDefault()
    const url ='/api/users/subscriptions/update/'+this.state.subscriptionId;
    axios.put(url)
         .then(result => {
          
           
           this.setState ({
             iFrame: result.data,
             updateCard: true
           })
         }) 

  }


 

  render(){
    if (this.state.updateCard) {
      return (
       <div className="container">
         <Card>
           <h1>Update Payment Information</h1>         
         </Card>
         <Card className="iFrame">
           <iframe src={this.state.iFrame} title="update card"></iframe>
         </Card>  
       </div>
      );
   }
   else {

    return this.props.user !== null ? (
         <div className="container">
          <Card>
            <h1>My Account</h1>

            
            {this.state.mode === 'view' ? (
            <div>
              <button onClick={this.goToEdit} className="btn btn-primary">Edit Profile</button> 
              <button onClick={this.editPayment} className="btn btn-primary">Update Credit Card</button>
            </div>)
              : ''}
        
          <form autoComplete="no">

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
              {/* <div className="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <select
                  id="inputState"
                  className="form-control"
                  name="state"
                  value={this.state.state}
                  defaultValue={this.state.state}
                  onChange={this.handleChange}
                  readOnly={this.viewOrEdit()}
                >
                  <option value="Kansas">Kansas</option>
                  <option value="Missouri">Missouri</option>
                </select>
              </div> */}
              <Row>
                <Input s={12} type='select' label="State" disabled="disabled">
                  <option value='Kansas'>Kansas</option>
                  <option value='Missouri'>Missouri</option>
                </Input>
              </Row>
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
            <div className="form-group col-md-2">
                <label htmlFor="trashday">Trash Day</label>
                <input
                  type="text"
                  className="form-control"
                  id="trashday"
                  name="trashday"
                  value={this.state.trashday}
                  onChange={this.handleChange}
                  readOnly={this.viewOrEdit()}
                />
            </div>
            <div className="form-group col-md-2">
                <label htmlFor="servicelevel">Service Level</label>
                <input
                  type="text"
                  className="form-control"
                  id="servicelevel"
                  name="servicelevel"
                  value={this.state.servicelevel}
                  onChange={this.handleChange}
                  readOnly={this.viewOrEdit()}
                />
            </div>




                {this.state.mode === 'edit' ? <button onClick={this.handleSubmit} className="btn btn-primary">Submit Account Changes</button> : <h1></h1>}
            
              
          </form>
          </Card>
          
        </div>




      ) : <div className="container"></div>;
    }
  }  
  
  
}
export default Profile;



