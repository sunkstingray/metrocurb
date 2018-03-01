import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import Card from "./../components/Card";
import googleButton from '../images/btn_google_signin_dark_normal_web.png'

class LogIn extends Component {
	constructor() {
		super()
		this.state = {
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
          <form>
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
          <a href="/auth/google">
						{/* <GoogleButton /> */}
						<img src={googleButton} alt="sign into Google Button" />
					</a>
        </div>
      );
    }
  }
}
export default LogIn;

