import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import Card from "./../components/Card";
import googleButton from '../images/btn_google_signin_dark_normal_web.png'

class SignUp extends Component {
	constructor() {
		super()
		this.state = {
      firstName: '',
      LastName: '',
      address: '',
      city: '',
      state: '',
			zip: '',
			username: '',
			password: '',
			redirectTo: null
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
  this.props._login(this.state.username, this.state.password)
  this.setState({
    redirectTo: '/'
  })
}
  
  render(){
    if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
      return(
        <div className="container">
          <Card>
          <form>
            <div className="form-group">
              <label forHtml="firstInput">First Name</label>
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
              <label forHtml="lastInput">Last Name</label>
              <input
                type="test"
                className="form-control"
                id="lastInput"
                name="lastName"
							  value={this.state.lastName}
							  onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label forHtml="inputAddress">Address</label>
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
                <label forHtml="inputCity">City</label>
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
                <label forHtml="inputState">State</label>
                <select
                  id="inputState"
                  className="form-control"
                  name="state"
							    value={this.state.state}
							    onChange={this.handleChange}
                >
                  <option selected>Choose...</option>
                  <option>Kansas</option>
                  <option>Missouri</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label forHtml="inputZip">Zip</label>
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
              <label forHtml="emailInput">Email address</label>
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
              <label forHtml="exampleInputPassword1">Password</label>
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
}
export default SignUp;

