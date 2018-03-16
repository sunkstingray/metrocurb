import React, { Component } from "react";
import Buttons from "./../components/Buttons"
import Card from "./../components/Card"
import API from "../utils/API";
import {Modal} from "react-materialize";
// import {Modal, Button} from "react-materialize";

class Admin extends Component {
    constructor() {
        super();
        this.state = {
            page:"Admin",
            contents: [],
            contentEdit: "",
            arrayIndex: 0,
            addValue: "",
            addAttribute: "",
        };
    }

    componentDidMount() {
        this.handleClick("HowItWorks");
    }

    //Once user choses a page, this pulls all of the editable content from database for use to chose from
    handleClick = (page) => {
        API.getContent(page)
            .then(result => {
            this.setState({
                page: page,
                contents: result.data.content,
            })
            console.log(result)

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
        
        this.setState({
            contentEdit: contentEdit,
        });

    };

    moveUp = (i) => {
        const content = this.state.contents;
        const tempContent = content[i];
        content[i] = content[i - 1];
        content[i - 1] = tempContent;
        if (this.state.page === "HowItWorks") {
            content[i].value = i+1;
            content[i - 1].value = i;
        }        
        
        this.setState({
            contents: content
        })
        const object = {
            content: this.state.contents
        }
        API.updateContent(this.state.page, object)
            .then(result => {
                this.handleClick(this.state.page)
            })
    }

    moveDown = (i) => {
        const content = this.state.contents;
        const tempContent = content[i];
        content[i] = content[i + 1];
        content[i + 1] = tempContent;
        
        if (this.state.page === "HowItWorks") {
            content[i].value = i + 1;
            content[i + 1].value = i + 2;
        }

        this.setState({
            contents: content
        })

        const object = {
            content: this.state.contents
        }

        API.updateContent(this.state.page, object)
            .then(result => {
                this.handleClick(this.state.page)
            })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let contentEdit = this.state.contentEdit;
        let contentArray = this.state.contents;
        contentArray[this.state.arrayIndex].attribute = contentEdit;
        this.setState({
            contents: contentArray
        })

        console.log(this.state.contents);
        console.log(this.state.page);
        const object = {
            content: this.state.contents
        }
        API.updateContent(this.state.page, object)
            .then(result => {
                this.setState({
                    contentEdit: "",
                })
                window.location.href = "/Profile";
            })
            .catch(err => console.log(err));
    }

    handleAddAttributeChange = event => {
        let attributeEdit = event.target.value;
        this.setState({
            addAttribute: attributeEdit
        })   
    }

    handleAddValueChange = event => {
        let valueEdit = event.target.value;
        this.setState ({
            addValue: valueEdit
        })

    }

    handleAddSubmit = event => {
        event.preventDefault();

        if (this.state.addAttribute !== "" && this.state.addValue !== "") {
            let object = {
                value: this.state.addValue,
                attribute: this.state.addAttribute
            }
            let newContent = this.state.contents;
            newContent.push(object);
            let newObject = {
                content: newContent,
            }
            
            
            API.updateContent(this.state.page, newObject)
                .then(result => {
                    console.log("success");
                    window.location.href = "/Profile";
                })
                .catch(err => console.log(err));
        }
        
    }

    handleDelete = i => {
        let currentContent = this.state.contents;
        console.log(currentContent)
        currentContent.splice(i, 1)
        console.log(currentContent)
        let object = {
            content: currentContent
        }

        if (this.state.page === "HowItWorks"){
            for (let k = i; k < currentContent.length; k ++){
                currentContent[k].value = i+1;
                i ++;
            }
        } 
        
        API.updateContent(this.state.page, object)
        .then(result => {
            console.log("success")
            window.location.href = "/Profile";
            this.handleClick(this.state.page)
        })
        .catch(err => console.log(err));
        
    }

    
    render(){
        return(
            <div className="container">
                <div className="btn-group" role="group">
                    <Buttons value="HowItWorks" onClick={() => this.handleClick("HowItWorks")}>How It Works Page</Buttons>
                    <Buttons value="Pricing" onClick={() => this.handleClick("Pricing")}>Pricing Page</Buttons>
                    <Buttons value="Faq" onClick={() => this.handleClick("Faq")}>FAQ Page</Buttons>
                </div>
                <Card>
                
                    <table className="bordered">
                        <thead>
                            <Modal 
                                header={this.state.page}
                                trigger={<Buttons>Add</Buttons>}
                                >
                                <form>
                                    <p>Heading</p>
                                    <textarea className="form-control" rows="1" onChange={this.handleAddValueChange}></textarea>
                                    <br />
                                    <p>Text</p>
                                    <textarea className="form-control" rows="3" onChange={this.handleAddAttributeChange}></textarea>
                                    <Buttons type="submit" onClick={this.handleAddSubmit}>Submit Add</Buttons>
                                </form>


                            </Modal>
                            <tr>
                                <th>Move</th>
                                <th>Content</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.contents.map((paragraph,i) => (     
                                <tr key={i}>
                                    <td >
                                        {(() => {
                                                let content = this.state.contents
                                                switch (i) {
                                                case 0:   return <a className="btn-floating waves-effect waves-light red" onClick={() => this.moveDown(i)}><i className="material-icons">arrow_downward</i></a>;
                                                case content.length - 1: return <a className="btn-floating waves-effect waves-light red" onClick={() => this.moveUp(i)}><i className="material-icons">arrow_upward</i></a>;
                                                default:      return (
                                                    <div>
                                                        {/* <button type="submit" onClick={() => this.moveUp(i)}><img className="responsive-img" width="30px" src="./images/up.jpeg" alt=""/></button> */}
                                                        <a className="btn-floating waves-effect waves-light red" onClick={() => this.moveUp(i)}><i className="material-icons">arrow_upward</i></a>
                                                        <a className="btn-floating waves-effect waves-light red" onClick={() => this.moveDown(i)}><i className="material-icons">arrow_downward</i></a>
                                                        {/* <button type="submit" onClick={() => this.moveDown(i)}><img className="responsive-img" width="30px" src="./images/down.jpeg" alt=""/></button> */}
                                                    </div>
                                                )
                                                }
                                            })()}
                                    </td>
                                    <td >
                                        <h5>{paragraph.value} </h5> <p>{paragraph.attribute}</p>
                                    </td>
                                    <td>
                                        <Modal
                                            header={paragraph.value}
                                            trigger={<Buttons>Edit</Buttons>}
                                            value={i}
                                            onClick={() => this.handleEditButtons(i)}>
                                            
                                            <form>
                                                <textarea className="form-control" rows="3" value={this.state.contentEdit} onChange={this.handleInputChange}></textarea>
                                                <br />
                                                <Buttons type="submit" onClick={this.handleSubmit}>Submit Change</Buttons>
                                            </form>
                                        </Modal>
                                        <Buttons onClick={() => this.handleDelete(i)}>Delete</Buttons>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>
            </div>
            
        )}
        
      
    }

    export default Admin;
