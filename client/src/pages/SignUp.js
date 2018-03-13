import React, { Component } from "react";
//import { Redirect } from 'react-router-dom'
import Card from "./../components/Card";
import axios from "axios";
// import googleButton from '../images/btn_google_signin_dark_normal_web.png'


function validate(username, password, passwordVal){
  
  if (/^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/.test(username))
  {
    const emailTest = false;
    return {
      username: emailTest,
      password: password.length === 0 || password !== passwordVal,
    };
  } else {
    const emailTest = true;
    return {
      username: emailTest,
      password: password.length === 0 || password !== passwordVal,
    };
  }
  // true means invalid, so our conditions got reversed
}

class SignUp extends Component {
	constructor() {
		super()
		this.state = {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
			username: '',
      password: '',
      passwordVal: '',
      touched: {
        username: false,
        password: false,
      },
			redirectTo: "null"
		}
	}


handleBlur = (field) => (evt) => {
  this.setState({
    touched: { ...this.state.touched, [field]: true },
  });
}

handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleSubmit = event => {
  event.preventDefault()
  console.log('handleSubmit')
  if (!this.canBeSubmitted()) {
    return;
  }

  axios.post('/auth/signup', {
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    address: this.state.address,
    city: this.state.city,
    state: this.state.state,
    zip: this.state.zip,
    //local:{
    username: this.state.username,
    password: this.state.password,
    // }
  })
  .then(response =>{
    // const user = {username: this.state.username, password: this.state.password};
    console.log(response);
    window.location.href = "/Profile";
  })
  .catch(error =>{
    console.log(error);
  });

  // this.props._login(this.state.username, this.state.password)
  // this.setState({
  //   redirectTo: '/'
  // })
}

canBeSubmitted() {
  const errors = validate(this.state.username, this.state.password, this.state.passwordVal);
  const isDisabled = Object.keys(errors).some(x => errors[x]);
  return !isDisabled;
}

  
  render(){
    const errors = validate(this.state.username, this.state.password, this.state.passwordVal);
    console.log("errors? " + JSON.stringify(errors));
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    console.log("Disabled? " + isDisabled);
    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };
    // if (this.state.redirectTo) {
		// 	return <Redirect to={{ pathname: this.state.redirectTo }} />
		// } else {
      return(
        <div className="container">
          <Card>
            <h1>Sign up for a new account.</h1>
            <h6 className="amber-text text-darken-4">All fields are required.</h6>
            <form>
              <div className="form-group input-field col s12">
                <input
                  type="text"
                  className="form-control validate"
                  id="firstInput"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  autoComplete='given-name'
                  required="true"
                />
                <label htmlFor="firstInput" data-error="Required Field">First Name</label>
              </div>
              <div className="form-group input-field col s12">
                <input
                  type="text"
                  className="form-control validate"
                  id="lastInput"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  autoComplete='family-name'
                  required="true"
                />
                <label htmlFor="lastInput" data-error="Required Field">Last Name</label>
              </div>
              <div className="form-group input-field col s12">
                <input
                  type="text"
                  className="form-control validate"
                  id="inputAddress"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                  autoComplete='address-line1'
                  required="true"
                />
                <label htmlFor="inputAddress" data-error="Required Field">Address</label>
              </div>
              <div className="form-row">
                <div className="form-group input-field col s12">
                  <input
                    type="text"
                    className="form-control validate"
                    id="inputCity"
                    name="city"
                    value={this.state.city}
                    onChange={this.handleChange}
                    autoComplete='address-level2'
                    required="true"
                  />
                  <label htmlFor="inputCity" data-error="Required Field">City</label>
                </div>


                <label>State</label>
                  <select
                      id="inputState"
                      className="form-control validate browser-default light-green lighten-5"
                      name="state"
                      value={this.state.state}
                      onChange={this.handleChange}
                      autocomplete='address-level1'
                      required="true"
                    >
                      <option>Kansas</option>
                      <option>Missouri</option>
                    </select>

                  
                <div className="form-group input-field col s12">
                  <input
                    ref="dropdown"
                    type="text"
                    className="form-control validate"
                    id="inputZip"
                    name="zip"
                    value={this.state.zip}
                    onChange={this.handleChange}
                    autoComplete='postal-code'
                    required="true"
                  />
                  <label htmlFor="inputZip" data-error="Required Field">Zip</label>
                </div>
              </div> 
              <div className="form-group input-field col s12">
                <input
                  onBlur={this.handleBlur('username')}
                  type="email"
                  className="validate"
                  id="emailInput"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  autoComplete='email'
                />
                <label htmlFor="emailInput" data-error="wrong">Email address</label>
              </div>

              <div className="form-group input-field col s12">
                <input
                  onBlur={this.handleBlur('password')}
                  type="password"
                  className={shouldMarkError('password') ? "red lighten-4 form-control" : "form-control"}
                  id="passwordInput1"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  autoComplete='no'
                />
                <label htmlFor="passwordInput1">Password</label>
              </div>
              <div className="form-group input-field col s12">
                <input
                  onBlur={this.handleBlur('password')}
                  type="password"
                  className={shouldMarkError('password') ? "red lighten-4 form-control" : "form-control"}
                  id="passwordInput2"
                  name="passwordVal"
                  value={this.state.passwordVal}
                  onChange={this.handleChange}
                  autoComplete='no'
                />
                <label htmlFor="passwordInput2">Re-Enter Password</label>
              </div>
              <button onClick={this.handleSubmit} className={isDisabled ? "disabled btn btn-primary" : "btn btn-primary"}>Sign Up</button>
            </form>
          </Card>
        </div>
        
      );
    }
  }
// }
export default SignUp;

