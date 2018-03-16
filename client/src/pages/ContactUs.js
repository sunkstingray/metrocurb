import React, { Component } from "react";
import Card from "./../components/Card";
import axios from "axios";
import API from "../utils/API";
import facebookLogo from "../images/facebook_logo.png";
import mailLogo from "../images/mail.png";
import logoImage from "../images/logo.jpg"

function validate(name, email, phone){

  if (/^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    const emailTest = false;
    return {
      email: emailTest,
      name: name.length === 0,
      phone: !(/\D*([/.2-9]\d{2})(\D*)([/.2-9]\d{2})(\D*)(\d{4})\D*/.test(phone))
    };
  } else {
    const emailTest = true;
    return {
      email: emailTest,
      name: name.length === 0,
      phone: !(/\D*([/.2-9]\d{2})(\D*)([/.2-9]\d{2})(\D*)(\d{4})\D*/.test(phone))
    };
  }
  // true means invalid, so our conditions got reversed
}

class ContactUs extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
      email: '',
      phone: '',
      comment: '',
      touched: {
        name: false,
        email: false,
        phone: false
      },
      redirectTo: "null", 
      contact: [ 
        {
            "value" : "Address",
            "attribute" : "12345 Main St. "
        }, 
        {
            "value" : "City",
            "attribute" : "Overland Park"
        }, 
        {
            "value" : "State",
            "attribute" : "KS"
        }, 
        {
            "value" : "Zip Code",
            "attribute" : "66213"
        }
    ],
		}
  }

  componentDidMount() {
    this.getContactInfo();
  }
  
  getContactInfo = () => {
    API.getAllContent()
      .then(result => {
        console.log(result.data[4].content)
        this.setState({
          contact: result.data[4].content
        })
      })
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
  
    axios.post('/mail/contact', {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      comment: this.state.comment
    })
    .then(response =>{
      // const user = {username: this.state.username, password: this.state.password};
      console.log(response);
      window.location.href = "/";
    })
    .catch(error =>{
      console.log(error);
    });

  }
  
  canBeSubmitted() {
    const errors = validate(this.state.name, this.state.email, this.state.phone);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }


  render(){
    const errors = validate(this.state.name, this.state.email, this.state.phone);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    
    // const shouldMarkError = (field) => {
    //   const hasError = errors[field];
    //   const shouldShow = this.state.touched[field];

    //   return hasError ? shouldShow : false;
    // };
    return(
      <div className="container">
        <Card>
        <div className="row">
          <div className="col s12">
            <h1>Contact Us</h1>
          </div>
          <div className="col l6">
              <form>
              <div className="form-group input-field col s12">
                <input
                  onBlur={this.handleBlur('name')}
                  type="text"
                  required autoComplete="name"
                  className="validate"
                  id="nameInput"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <label htmlFor="nameInput" data-error="Name is required.">Name</label>
              </div>
              <div className="form-group input-field col s12">
                <input
                onBlur={this.handleBlur('email')}
                  type="email"
                  required autoComplete="email"
                  className="validate"
                  id="emailInput"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <label htmlFor="emailInput" data-error="Valid email is required">Email</label>
              </div>
              <div className="form-group input-field col s12">
                <input
                  onBlur={this.handleBlur('phone')}
                  type="tel"
                  required autoComplete="tel"
                  className="validate"
                  id="phoneInput"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
                <label htmlFor="phoneInput" data-error="Please enter phone number.">Phone</label>
              </div>
              <div className="form-group input-field col s12">
                <textarea
                  onBlur={this.handleBlur('comment')}
                  className="materialize-area"
                  id="commentInput"
                  rows="5"
                  name="comment"
                  value={this.state.comment}
                  onChange={this.handleChange}
                />
                <label htmlFor="commentInput">Comments</label>
              </div>
              <button disabled={isDisabled} onClick={this.handleSubmit} className="btn btn-primary">Send</button>
              </form>

          </div>
          <div className="col l6 center-align">
            <h4> 913-555-1234</h4> <br />
            <div class="fb-page" data-href="https://www.facebook.com/Metro-Curbside-Cleaning-LLC-452583424794712/" data-tabs="messages" data-width="500" data-height="250" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Metro-Curbside-Cleaning-LLC-452583424794712/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Metro-Curbside-Cleaning-LLC-452583424794712/">Metro Curbside Cleaning LLC</a></blockquote></div>
                {/* <h4 className="center-align">Metro Curbside Cleaning</h4> */}
            
                
          </div>
        </div>
        </Card>
      </div>
    )
  }
}
export default ContactUs;
