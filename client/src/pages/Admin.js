import React, { Component } from "react";
import Buttons from "./../components/Buttons"
import Card from "./../components/Card"
import API from "../utils/API";
import {Modal, Button} from "react-materialize";

class Admin extends Component {
    constructor() {
        super();
        this.state = {
            page:"Admin",
            contents: [],
            contentEdit: "",
            arrayIndex: 0,
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
        
        this.setState({
            contents: content
        })

        API.updateContent(this.state.page, content)
            .then(result => {
                this.handleClick(this.state.page)
            })
    }

    moveDown = (i) => {
        const content = this.state.contents;
        const tempContent = content[i];
        content[i] = content[i + 1];
        content[i + 1] = tempContent;
        
        this.setState({
            contents: content
        })

        API.updateContent(this.state.page, content)
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
        const object = {
            content: this.state.contents
        }
        API.updateContent(this.state.page, object)
            .then(result => {
                alert("Element successfully updated!");
                this.setState({
                    contentEdit: "",
                })
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
                                                case 0:   return <button type="submit" onClick={() => this.moveDown(i)}><img className="responsive-img" width="30px" src="./images/down.jpeg"/></button>;
                                                case content.length - 1: return <button type="submit" onClick={() => this.moveUp(i)}><img className="responsive-img" width="30px" src="./images/up.jpeg"/></button>;
                                                default:      return (
                                                    <div>
                                                        <button type="submit" onClick={() => this.moveUp(i)}><img className="responsive-img" width="30px" src="./images/up.jpeg"/></button>
                                                        <button type="submit" onClick={() => this.moveDown(i)}><img className="responsive-img" width="30px" src="./images/down.jpeg"/></button>
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
                                                <textarea className="form-control" rows="3" placeholder={this.state.contentEdit} onChange={this.handleInputChange}></textarea>
                                                <br />
                                                <Buttons type="submit" onClick={this.handleSubmit}>Submit Change</Buttons>
                                            </form>
                                        </Modal>
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
