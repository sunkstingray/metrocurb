const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/metrocurb",
    {
      useMongoClient: true
    }
  );


const contentsSeed = [
  {
    component: "Pricing", 
    content: [ 
      {
        value: 1, 
        attribute: "Weekly Cleaning: $364/year (Our beat deal!!)", 
      }, {
        value: 2, 
        attribute: "Bi-Weekly Cleaning: $250/year",
      }, {
        value: 3, 
        attribute: "Monthly Cleaning: $199/year",
      }, {
        value: 4, 
        attribute: "Alternating Months: $99/year", 
      }, {
        value: 5,
        attribute: "Quarterly Cleaning: $75/year", 
      }, {
        value: 6, 
        attribute: "Single Cleaning: $25.00"
      }
   ]
  }, {
    component : "HowItWorks",
    content : [ 
      {
        value: 1, 
        attribute: "Trash bins are lifted into the washing position by a lift.", 
      }, {
        value: 2, 
        attribute: "The inside of the bin is blasted with hot water.", 
      }, {
        value: 3,
        attribute: "During the cleaning process, the operator uses a hand-held, high pressure washer to clean the exterior and the lid.", 
      }, {
        value: 4, 
        attribute: "The bin is then lowered, vacuumed, wiped, sanitized and deodorized.", 
      }, {
        value: 5, 
        attribute: "All waste water is collected and filtered by us (so no worries about it getting in your yard, driveway or down the drain).", 
      }, {
        value: 6, 
        attribute: "Believe it or not, it actually takes a very small amount of water to thoroughly clean & sanitize each unit (if you did the cleaning yourself, you'd use about 27 gallons each time!).", 
      }, {
        value: 7, 
        attribute: "Believe it or not, it actually takes a very small amount of water to thoroughly clean & sanitize each unit (if you did the cleaning yourself, you'd use about 27 gallons each time!).", 
      }, {
        value: 8, 
        attribute: "The process we use is automated and fully contained, so no run-off enters the storm drains or your yard.", 
      }, {
        value: 9,
        attribute: "All products we use are biodegradable."
      }
    ]
  }, {
    component : "Home",
    content : [ 
      {
        value: 1, 
        attribute: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Tellus mauris a diam maecenas sed enim ut sem. Et leo duis ut diam quam nulla porttitor.", 
      }, {
        value:2, 
        attribute: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan lacus vel facilisis volutpat est velit egestas dui. Ultricies leo integer malesuada nunc vel risus commodo viverra. Nunc pulvinar sapien et ligula ullamcorper malesuada. Sed viverra ipsum nunc aliquet bibendum."
      }
    ]
  }, {
    component : "Faq",
    content : [ 
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
  }, {
    component : "ContactUs",
    content : [ 
        {
          value: "Address", 
          attribute: "12345 Main St. "
        }, {
          value: "City", 
          attribute: "Overland Park", 
        }, {
          value: "State", 
          attribute: "KS", 
        }, {
          value: "Zip Code", 
          attribute: "66324"
        }
      ]
  }
];


db.Content
  .remove({})
  .then(() => db.Content.collection.insertMany(contentsSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });