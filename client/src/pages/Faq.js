import React, { Component } from "react";
import Card from "./../components/Card";
import API from "../utils/API";

class Home extends Component {
  state = {
    page:"Faq",
    contents:[
      {
        value : "How do I know when to put my bins out?",
        attribute : "Please leave your trash & recycle bins out after your regular pick-up day, so when we come by (within 24 hours of the regular pick-up) the bins are ready and waiting to be cleaned!"
      }, 
      {
          value : "Why get my trash cleaned?",
          attribute : "Bacteria such as Salmonella, Listeria, Staphylococcus, and E-Coli aren't just on the inside...that stuff is on the lid & handle too! Contact us today to get rid of all bacteria!"
      }, 
      {
          value : "What if I need to reschedule?",
          attribute : "Just let us know at least a week in advance and we will be in contact with you to reschedule"
      }
    ]
  }

  componentDidMount() {
    this.loadContent("Faq");
  }

  loadContent = (page) => {
    //do something to get the content for homepage from MongoDB and save it as the current state
    API.getContent(page)
      .then(result => {
        console.log(result.data.content);
        this.setState({
          contents: result.data.content
        })
    }).catch(err => console.log(err))
  }
  
  render(){
    return(
      <div className="container">
        <Card>
          {this.state.contents.map(paragraph => (          
            <div>
              <h4>{paragraph.value}</h4>
              <br />
              <p>{paragraph.attribute}</p>
              <br />
            </div>
          ))}
        </Card>
      </div>
    )
  }
}
export default Home;

