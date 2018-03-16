import React, { Component } from "react";
//import axios from 'axios'
import Card from "./../components/Card";

class LogOut extends Component {
    constructor() {
		super()
		this.state = {
    page:"LogOut",
    contents:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis egestas. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Scelerisque eu ultrices vitae auctor. Sit amet porttitor eget dolor morbi non. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Leo duis ut diam quam nulla. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Euismod quis viverra nibh cras. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Condimentum mattis pellentesque id nibh tortor. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Orci porta non pulvinar neque laoreet. Cras pulvinar mattis nunc sed. Vitae semper quis lectus nulla. Blandit aliquam etiam erat velit scelerisque. Leo in vitae turpis massa. Dui accumsan sit amet nulla facilisi morbi tempus. Quis risus sed vulputate odio ut enim blandit volutpat. Lectus vestibulum mattis ullamcorper velit sed.",
    "Arcu bibendum at varius vel pharetra vel turpis. Ipsum dolor sit amet consectetur adipiscing elit. Lacus laoreet non curabitur gravida. Leo in vitae turpis massa sed elementum tempus. Id cursus metus aliquam eleifend mi in nulla posuere. Rhoncus urna neque viverra justo nec ultrices dui sapien. Pretium vulputate sapien nec sagittis. In ante metus dictum at. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Dui accumsan sit amet nulla. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Elementum eu facilisis sed odio. Eget arcu dictum varius duis at consectetur lorem. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Feugiat in ante metus dictum at. Sagittis id consectetur purus ut faucibus. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Faucibus purus in massa tempor nec. Amet dictum sit amet justo donec enim diam vulputate ut."
        ]
        }
    }

//   componentWillMount() {
//     console.log('logging out');
//     () => this.props.logoutmethod();
    
//   }

  
  // loadContent = (this.state.page) => {
  //   //do something to get the content for homepage from MongoDB and save it as the current state
  // }
  
  render(){
    return(
      <div className="container">
        <Card>
            <h3>You have been logged out.</h3>
        </Card>
      </div>
    )
  }
}

export default LogOut;
