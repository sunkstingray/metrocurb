import React, { Component } from "react";
import Button from "./../components/Button"
import Card from "./../components/Card"
import API from "../utils/API";

class Admin extends Component {
    state = {
        page:"Admin",
        contents: [],
        contentEdit: "",
        arrayIndex: 0,
    }

    componentDidMount() {
        this.handleClick("Home");
    }

    //Once user choses a page, this pulls all of the editable content from database for use to chose from
    handleClick = (page) => {
        API.getContent(page)
            .then(result => {
            this.setState({
                page: page,
                contents: result.data.content,
                dbContents: result.data.content,
            })
            console.log(this.state.dbContents);
            console.log(this.state.contents)
        }).catch(err => console.log(err))
    }

    //user chooses which element they want to edit and renders it in the text box for the user to edit
    handleEditButton = (i) => {
        let newEdit = this.state.contents[i].attribute
        this.setState({
            contentEdit: newEdit,
            arrayIndex: i,
        })
    }

    //As the user types their edit, it saves it to the state of the contents
    handleInputChange = event => {
        let contentEdit = event.target.value;
        let contentArray = this.state.contents;
        contentArray[this.state.arrayIndex].attribute = contentEdit;
        this.setState({
          contents: contentArray,
        });
        console.log(this.state.dbContents)
        // console.log(this.state.contents)
      };

    handleSubmit = (event) => {
        event.preventDefault();
        const object = {
            content: this.state.contents
        }
        API.updateContent(this.state.page, object)
            .then(result => {
                this.handleClick(this.state.page)
                alert("Element successfully updated!");
            })
            .catch(err => console.log(err));
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
                                <div key={i}>
                                    <h4><span> {paragraph.value}</span></h4>
                                    <h6><Button value={i} onClick={() => this.handleEditButton(i)} >Edit </Button>  <span> {paragraph.attribute}</span></h6>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>
                <form>
                    <textarea className="form-control" rows="3" placeholder={this.state.contentEdit} onChange={this.handleInputChange}></textarea>
                    <br />
                    <Button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Submit Change</Button>
                </form>
            </div>
        )}
        
    }

    export default Admin;
