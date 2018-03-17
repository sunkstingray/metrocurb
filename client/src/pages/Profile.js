import React, { Component } from "react";
import Card from "./../components/Card";
import {Row, Input, Modal} from "react-materialize";
import Buttons from "./../components/Buttons"

import axios from 'axios';
import Button from "react-materialize/lib/Button";

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
                     window.location.href = "/Profile";
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
            
            <Modal
              header="Edit Profile"
              trigger={<Buttons>Edit Profile</Buttons>}
              >
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
                    />
                  </div>
                  <div className="form-group col-md-2">
                    <select
                      id="inputState"
                      className="form-control validate browser-default light-green lighten-5"
                      name="state"
                      value={this.state.state}
                      onChange={this.handleChange}
                      required="true"
                    >
                      <option value='Kansas'>Kansas</option>
                      <option value='Missouri'>Missouri</option>
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
                </div>
                <div className="form-group col-md-2">
                  <select
                    id="inputTrashDay"
                    className="form-control validate browser-default light-green lighten-5"
                    name="trashday"
                    value={this.state.trashday}
                    onChange={this.handleChange}
                    autocomplete='no'
                    required="true"
                  >
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <select
                      id="inputServiceLevel"
                      className="form-control validate browser-default light-green lighten-5"
                      name="servicelevel"
                      value={this.state.servicelevel}
                      onChange={this.handleChange}
                      autocomplete='no'
                      required="true"
                    >
                      <option value="10">Weekly Cleaning Subscription ($400/year)</option>
                      <option value="20">Monthly Cleaning Subscription ($199/year)</option>
                  </select>
                </div>

              </form>
              <Buttons onClick={this.handleSubmit} >Submit Changes</Buttons>
            </Modal>
            <Buttons onClick={this.editPayment} className="btn btn-primary">Update Credit Card</Buttons>
        
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
              <Row>
                <Input s={12} type='select' label="State" disabled={this.viewOrEdit === "disabled" ? "" : "false"}>
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
              {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
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


            

                {this.state.mode === 'edit' ? <button onClick={this.handleSubmit} className="btn btn-primary">Submit Changes</button> : <h1></h1>}
            
              
          </form>
          </Card>
          
        </div>




      ) : <div className="container"></div>;
    }
  }  
  
  
}
export default Profile;



