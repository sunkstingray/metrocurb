import React, { Component } from "react";
import Button from "./../components/Button"
import API from "../utils/API";

class Admin extends Component {
  state = {
    page:"Admin",
    contents: ["null"],
  }

  componentDidMount() {
    this.handleClick("Pricing");
  }

  handleClick = (page) => {
    API.getContent(page)
        .then(result => {
        // console.log(result.data.content);
        this.setState({
            contents: result.data.content
        })
    }).catch(err => console.log(err))
    }
  
  render(){
    return(
        <div className="container">
            <div className="btn-group" role="group">
                <Button value="Home" onClick={this.handleClick("Home")}>Home Page</Button>
                <Button value="HowItWorks" onClick={this.handleClick("HowItWorks")}>How It Works Page</Button>
                <Button value="Pricing" onClick={this.handleClick("Pricing")}>Pricing Page</Button>
                <Button value="ContactUs" onClick={this.handleClick("ContactUs")}>Contact Us Page</Button>
                <Button value="Faq" onClick={this.handleClick("Faq")}>FAQ Page</Button>
            </div>
        </div>
    )}
    
}

export default Admin;
