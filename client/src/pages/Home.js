import React, { Component } from "react";
import Card from "./../components/Card";
import API from "../utils/API";

class Home extends Component {

  constructor() {
    super()
    this.state = {
      mongoData: [
            {
                "component" : "Pricing",
                "content" : [ 
                    {
                        "value" : "Weekly Cleaning",
                        "attribute" : "$400/year (Our best deal!!)"
                    }, 
                    {
                        "value" : "Bi-Weekly Cleaning",
                        "attribute" : "$250/year"
                    }, 
                    {
                        "value" : "Monthly Cleaning",
                        "attribute" : "$199/year"
                    }, 
                    {
                        "value" : "Alternating Months",
                        "attribute" : "$99/year"
                    }, 
                    {
                        "value" : "Quarterly Cleaning",
                        "attribute" : "$75/year"
                    }, 
                    {
                        "value" : "Single Cleaning",
                        "attribute" : "$25"
                    }
                ]
            },
            {
                "component" : "HowItWorks",
                "content" : [ 
                    {
                        "value" : "Step 1",
                        "attribute" : "Trash bins are lifted into the washing position by a lift."
                    }, 
                    {
                        "value" : "Step 2",
                        "attribute" : "The inside of the bin is blasted with hot water."
                    }, 
                    {
                        "value" : "Step 3",
                        "attribute" : "During the cleaning process, the operator uses a hand-held, high pressure washer to clean the exterior and the lid."
                    }, 
                    {
                        "value" : "Step 4",
                        "attribute" : "The bin is then lowered, vacuumed, wiped, sanitized and deodorized."
                    }, 
                    {
                        "value" : "Step 5",
                        "attribute" : "All waste water is collected and filtered by us (so no worries about it getting in your yard, driveway or down the drain)."
                    }, 
                    {
                        "value" : "Step 6",
                        "attribute" : "Believe it or not, it actually takes a very small amount of water to thoroughly clean & sanitize each unit (if you did the cleaning yourself, you'd use about 27 gallons each time!)."
                    }, 
                    {
                        "value" : "Step 7",
                        "attribute" : "Believe it or not, it actually takes a very small amount of water to thoroughly clean & sanitize each unit (if you did the cleaning yourself, you'd use about 27 gallons each time!)."
                    }, 
                    {
                        "value" : "Step 8",
                        "attribute" : "The process used automated and fully contained, so no run-off enters the storm drains or your yard."
                    }, 
                    {
                        "value" : "Step 9",
                        "attribute" : "All products are biodegradable"
                    }
                ]
            },
            {
                "component" : "Home",
                "content" : [ 
                    {
                        "value" : 1,
                        "attribute" : "Hello"
                    }, 
                    {
                        "value" : 2,
                        "attribute" : "sdfwecwasc"
                    }
                ]
            },
            {
                "component" : "Faq",
                "content" : [ 
                    {
                        "value" : "How do I know when to put my bins out?",
                        "attribute" : "Please leave your trash & recycle bins out after your regular pick-up day, so when we come by (within 24 hours of the regular pick-up) the bins are ready and waiting to be cleaned!"
                    }, 
                    {
                        "value" : "Why get my trash cleaned?",
                        "attribute" : "Bacteria such as Salmonella, Listeria, Staphylococcus, and E-Coli aren't just on the inside...that stuff is on the lid & handle too! Contact us today to get rid of all bacteria!"
                    }, 
                    {
                        "value" : "What if I need to reschedule?",
                        "attribute" : "Just let us know at least a week in advance and we will be in contact with you within 24 hours to reschedule"
                    }
                ]
            },
            {
                "component" : "ContactUs",
                "content" : [ 
                    {
                        "value" : "Address",
                        "attribute" : "12345 Main St. "
                    }, 
                    {
                        "value" : "City",
                        "attribute" : "Overland Park"
                    }, 
                    {
                        "value" : "State",
                        "attribute" : "KS"
                    }, 
                    {
                        "value" : "Zip Code",
                        "attribute" : "66213"
                    }
                ]
            }
      ]
    }
}


componentDidMount() {
    this.uploadContent();
  }

  uploadContent = () => {
    const content = this.state.mongoData
    API.uploadContent(content)
        .then(result => {
            alert("Success!")
        })
        .catch(err => console.log(err))
  }

  loadContent = () => {
    //do something to get the content for homepage from MongoDB and save it as the current state
    API.getAllContent()
      .then(result => {
        console.log("MONGO DATABSE")
        console.log(result.data);
        if (result.data.length > 0){
            this.setState({
                mongoData: result.data
            })
        }
    }).catch(err => console.log(err))
  }
  
  
  render(){
    return(
      <div  className="container">
        <Card>
            <div className="center-align">
                <h1>Metro Curbside Cleaning</h1>
                <h4>We are a curbside cleaning service for your trash and recycle bins. </h4>
                <h5>All of our cleaning products are eco friendly (which means they will not hurt the environment)</h5>
            </div>
            <div className="card-tabs transparent">
                <ul className="tabs tabs-fixed-width transparent">
                    <li className="tab"><a href="#howItWorks" className="black">How It Works</a></li>
                    <li className="tab"><a href="#pricing" className="black">Pricing</a></li>
                    <li className="tab"><a href="#faq" className="black">FAQ</a></li>
                </ul>
            </div>
            <div className="card-content cards">
                <div id="howItWorks">
                    <h3 className="center-align">How It Works</h3>
                    <ul>
                            {this.state.mongoData[1].content.map((paragraph,i) => ( 
                                    
                            <li key={i}>{paragraph.value} : {paragraph.attribute}</li>
                            ))}
                    </ul>
                    <div className="video-container">
                        <iframe className="responsive-video" src="https://player.vimeo.com/video/82785910"></iframe>
                    </div>
                </div>
                <div id="pricing">
                    <h3 className="center-align">Pricing</h3>
                    <ul>
                        {this.state.mongoData[0].content.map((paragraph,i) => (          
                        <li key={i}>{paragraph.value} : {paragraph.attribute}</li>
                        ))}
                    </ul>
                    <h5>Rates listed above are for 2 bins (1 trash & 1 recycle)</h5>
                </div>
                <div id="faq">
                    <h3 className="center-align">FAQ</h3>
                        {this.state.mongoData[3].content.map((paragraph, i) => (          
                        <div key={i}>
                            <h5>{paragraph.value}</h5>
                            <p>{paragraph.attribute}</p>
                            <br />
                        </div>
                    ))}
                </div>
            </div>
        </Card>
      </div>
    )
  }
}
export default Home;