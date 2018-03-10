import React, { Component } from "react";
import Buttons from "./../components/Buttons"
import Card from "./../components/Card"
import API from "../utils/API";
import {Modal, Button} from "react-materialize";

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
    handleEditButtons = (i) => {
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
                <div className="card-tabs transparent">
                    <ul className="tabs tabs-fixed-width transparent">
                        <li className="tab"><a href="#howItWorks" className="black">How It Works</a></li>
                        <li className="tab"><a href="#pricing" className="black">Pricing</a></li>
                        <li className="tab"><a href="#faq" className="black">FAQ</a></li>
                    </ul>
                </div>
                <div className="card-content cards">
                    <div id="howItWorks">
                        <div>
                            {this.state.contents.map((paragraph,i) => (          
                                <div key={i}>
                                    <h4><span> {paragraph.value}</span></h4>
                                    <h6><Buttons value={i} onClick={() => this.handleEditButtons(i)} >Edit </Buttons>  <span> {paragraph.attribute}</span></h6>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id="pricing">
                        <div>
                            {this.state.contents.map((paragraph,i) => (          
                                <div key={i}>
                                    <h4><span> {paragraph.value}</span></h4>
                                    <h6><Buttons value={i} onClick={() => this.handleEditButtons(i)} >Edit </Buttons>  <span> {paragraph.attribute}</span></h6>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id="faq">
                        <div>
                            {this.state.contents.map((paragraph,i) => (          
                                <div key={i}>
                                    <h4><span> {paragraph.value}</span></h4>
                                    <h6><Buttons value={i} onClick={() => this.handleEditButtons(i)} >Edit </Buttons>  <span> {paragraph.attribute}</span></h6>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>




                {/* <div className="btn-group" role="group">
                    <Buttons value="HowItWorks" onClick={() => this.handleClick("HowItWorks")}>How It Works Page</Buttons>
                    <Buttons value="Pricing" onClick={() => this.handleClick("Pricing")}>Pricing Page</Buttons>
                    <Buttons value="Faq" onClick={() => this.handleClick("Faq")}>FAQ Page</Buttons>
                </div>
                <Card>
                    <div>
                        <div>
                            {this.state.contents.map((paragraph,i) => (          
                                <div key={i}>
                                    <h4><span> {paragraph.value}</span></h4>
                                    <h6><Buttons value={i} onClick={() => this.handleEditButtons(i)} >Edit </Buttons>  <span> {paragraph.attribute}</span></h6>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card> */}
                <Modal
                    header='Modal Header'
                    trigger={<Button>MODAL</Button>}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </Modal>
            </div>
            
        )}
        
      
    }

    export default Admin;
