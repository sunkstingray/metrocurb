import React, { Component } from "react";
import Card from "./../components/Card";
import API from "../utils/API";

class Home extends Component {
  state = {
    page:"Home",
    contents:[
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Tellus mauris a diam maecenas sed enim ut sem. Et leo duis ut diam quam nulla porttitor.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan lacus vel facilisis volutpat est velit egestas dui. Ultricies leo integer malesuada nunc vel risus commodo viverra. Nunc pulvinar sapien et ligula ullamcorper malesuada. Sed viverra ipsum nunc aliquet bibendum."
    ]
  }

  componentDidMount() {
    this.loadContent("Home");
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
          <div>
            <h1>Welcome to Metro Curbside Cleaning</h1>
            <br />
            <img src="./images/cleaner.png" />  
            {this.state.contents.map((paragraph, i) => (          
              <h6 key={i}>{paragraph}</h6>
            ))}
          </div>
        </Card>
      </div>
    )
  }
}
export default Home;

