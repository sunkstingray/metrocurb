const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const zoho = require('./routes/zoho');

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add routes
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//****NOTE THAT THESE ROUTES CAN BE TESTED LOCALLY BY GOING TO LOCALHOST:3001****//

//get all leads
app.get("/api/leads", function(req, res) {

  zoho.getLeads(function (err, result) {
 		if (err !== null) {
    		console.log(err);
  		} else if (result.isError()) {
    		console.log(result.message);
  		} else {
  
    	res.send(result.data);
    	}
  });
  
});

//create one contact (which is hard coded in zoho module right now)
app.post("/api/contacts/create",function(req,res){
	zoho.createContact(function(err,result){
		if (err !== null) {
    		console.log(err);
  		} else if (result.isError()) {
    		console.log(result.message);
  		} else {
  
    	res.send(result.data);
    	}
	})
})

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});


