import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import Card from "./../components/Card";
import axios from "axios";
// import googleButton from '../images/btn_google_signin_dark_normal_web.png'

class SignUp extends Component {
	constructor() {
		super()
		this.state = {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: 'Kansas',
			zip: '',
			username: '',
			password: '',
			redirectTo: "null"
		}
	}

  componentDidMount() {
    // this.loadContent();
  }

//   loadContent = (page) => {
//     //do something to get the content for homepage from MongoDB and save it as the current state
//   }

handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleSubmit = event => {
  event.preventDefault()
  console.log('handleSubmit')

  axios.post('/api/users', {
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    address: this.state.address,
    city: this.state.city,
    state: this.state.state,
    zip: this.state.zip,
    local:{
    username: this.state.username,
    password: this.state.password
    }
  })
  .then(response =>{
    console.log(response);
  })
  .catch(error =>{
    console.log(error);
  });

  // this.props._login(this.state.username, this.state.password)
  // this.setState({
  //   redirectTo: '/'
  // })
}
  
  render(){
    // if (this.state.redirectTo) {
		// 	return <Redirect to={{ pathname: this.state.redirectTo }} />
		// } else {
      return(
        <div className="container">
          <Card>
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
              <div className="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <select
                  id="inputState"
                  className="form-control"
                  name="state"
							    value={this.state.state}
							    onChange={this.handleChange}
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
							  onChange={this.handleChange}
              />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
							  value={this.state.password}
							  onChange={this.handleChange}
              />
            </div>
            <button onClick={this.handleSubmit} className="btn btn-primary">Login</button>
          </form>
          </Card>
        </div>
        
      );
    }
  }
// }
export default SignUp;

