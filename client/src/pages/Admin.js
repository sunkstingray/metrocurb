import React, { Component } from "react";
import Button from "./../components/Button"
import Card from "./../components/Card"
import API from "../utils/API";

class Admin extends Component {
    state = {
        page:"Admin",
        contents: [],
        style: "display.none",
        contentEdit: "",
    }

    componentDidMount() {
        this.handleClick("Home");
    }

    handleClick = (page) => {
        API.getContent(page)
            .then(result => {
            console.log(result.data.content);
            this.setState({
                contents: result.data.content
            })
        }).catch(err => console.log(err))
    }

    handleEditButton = (i) => {
        console.log(this.state.contents[i])
        let newEdit = this.state.contents[i]
        this.setState({
            contentEdit: newEdit,
        })
    }

    handleSubmit = () => {
        
    }
    
    render(){
        return(
            <div className="container">
                <div className="btn-group" role="group">
                    <Button value="Home" onClick={() => this.handleClick("Home")}>Home Page</Button>
                    <Button value="HowItWorks" onClick={() => this.handleClick("HowItWorks")}>How It Works Page</Button>
                    <Button value="Pricing" onClick={() => this.handleClick("Pricing")}>Pricing Page</Button>
                    <Button value="ContactUs" onClick={() => this.handleClick("ContactUs")}>Contact Us Page</Button>
                    <Button value="Faq" onClick={() => this.handleClick("Faq")}>FAQ Page</Button>
                </div>
                <Card>
                    <div>
                        <div>
                            {this.state.contents.map((paragraph,i) => (          
                            <p key={i}><Button value={i} onClick={() => this.handleEditButton(i)} >Edit </Button>   <span> {paragraph}</span></p>
                            ))}
                        </div>
                    </div>
                </Card>
                <form>
                    <textarea className="form-control" rows="3" placeholder={this.state.contentEdit}></textarea>
                    <br />
                    <Button type="submit" className="btn btn-default" onClick={() => this.handleSubmit()}>Submit Change</Button>
                </form>
            </div>
        )}
        
    }

    export default Admin;
