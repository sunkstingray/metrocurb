import React, { Component } from "react";
import Card from "./../components/Card";

class Home extends Component {
  state = {
    page:"Faq",
    contents:[
      {question: "How do I know when to put my bins out?", answer:"Please leave your trash & recycle bins out after your regular pick-up day, so when we come by (within 24 hours of the regular pick-up) the bins are ready and waiting to be cleaned!"}, 
      {question: "Why get my trash cleaned?", answer:"Bacteria such as Salmonella, Listeria, Staphylococcus, and E-Coli aren't just on the inside...that stuff is on the lid & handle too! Contact us today to get rid of all bacteria!"},
      {question: "What if I need to reschedule?", answer:"Just let us know at least a week in advance and we will be in contact with you to reschedule"}
    ]
  }

  componentDidMount() {
    // this.loadContent();
  }

  // loadContent = () => {
  //   //do something to get the content for homepage from MongoDB and save it as the current state
  // }
  
  render(){
    return(
      <div className="container">
        <Card>
          {this.state.contents.map(paragraph => (          
            <div>
              <h4>{paragraph.question}</h4>
              <br />
              <p>{paragraph.answer}</p>
              <br />
            </div>
          ))}
        </Card>
      </div>
    )
  }
}
export default Home;

