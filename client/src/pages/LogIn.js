import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import Card from "./../components/Card";
//import Buttons from "./../components/Buttons";
import axios from "axios";
//import googleButton from '../images/btn_google_signin_dark_normal_web.png'

class LogIn extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			redirectTo: null
		}
	}

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios.post('/auth/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then(response => {
      console.log(response);
      // if (response.status === 200) {
      //   // update the state
      //   this.setState({
      //     loggedIn: true,
      //     user: response.data.user
      //   })
      // }
      window.location.href = "/Profile";
    })
    .catch(error => {
      console.log(error);
    });

    // console.log('handleSubmit')
    // this.props._login(this.state.username, this.state.password)
    // this.setState({
    //   redirectTo: '/'
    // })
  }
  
  render(){
    if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
      return(
        <div className="container">
          <Card>
            <h1>Log in to your account.</h1>
          <form>
            <div className="form-group input-field col s12">
              <input
                type="email"
                className="form-control"
                id="emailInput"
                name="username"
							  value={this.state.username}
							  onChange={this.handleChange}
                autoComplete='email'
              />
              <label htmlFor="emailInput">Email address</label>
            </div>
            <div className="form-group input-field col s12">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
							  value={this.state.password}
							  onChange={this.handleChange}
                autoComplete='no'
              />
              <label htmlFor="exampleInputPassword1">Password</label>
            </div>
            <button onClick={this.handleSubmit} className="btn btn-primary">Login</button>
            <a href="/forgot" className="btn btn-link"> Forgot Password?</a>
          </form>

          </Card>
        </div>
      );
    }
  }
}
export default LogIn;

