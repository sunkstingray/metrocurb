var Zoho = require('node-zoho');
var token = "819a8ad65f01c4aa231231e8d6b5ad81";
var zoho = new Zoho({ authToken: token });
var axios = require('axios');
var userController = require("../../controllers/userController");
const db = require("../../models");

var records = [
  {
    "Lead Source": "Online Store",
    "First Name": "Leonard",
    "Last Name": "Galey",
    "Email": "test@testerson.com",
    "Description": "Created from Express Route"
  }
];



module.exports = {
  getLeads: cb => {
    zoho.execute('crm', 'Leads', 'getRecords', {}, cb);//return all leads as array (JSON)
  },
  createContact: (data, cb) => {
    zoho.execute('crm', 'Contacts', 'insertRecords', [data], cb);
  },

  findById: (req, res) => {
    var zohoId = req.params.zohoId;
    //console.log("zohohoid: " + zohoId);

    zoho.execute('crm', 'Contacts', 'getRecordById', zohoId, function (err, userData) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(userData.data);
        //console.log(userData.data);
      }
    });
  },
  updateContact: (req, res) => {
    var zohoId = req.params.zohoId;
    console.log("PUT zohohoid: " + zohoId);
    console.log(req.body);

    var zohoContact = {
    	"First Name"   : req.body.firstName,
			"Last Name"    : req.body.lastName,
			"Mailing Street" : req.body.address,
			"Mailing City" : req.body.city,
			"Mailing State": req.body.state,
			"Mailing Zip"  : req.body.zip
    }

    zoho.execute('crm', 'Contacts', 'updateRecords', zohoId, [zohoContact], function (err, userData) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(userData.data);
        console.log("Update Contact, Response: userData.data:");
        console.log(userData.data);
      }
    });
  },
  updateHostedPageId: (req,res) => {
      console.log("params: ");
      console.log(req.query);
      const hostedPageId = req.query.hostedpage_id; 
      console.log("userid:" + req.user._id);

      let redirect;
      if(process.env.NODE_ENV === "production"){
        redirect = 'https://afternoon-tor-85875.herokuapp.com/Profile';
      }
      else {
        redirect = 'http://127.0.0.1:3000/Profile';
      }
      

      db.Users
          .findById(req.user._id)
          .then(dbUser => {
            const zohoId = dbUser.zohoId;
            const url = 'https://subscriptions.zoho.com/api/v1/hostedpages/' + hostedPageId;

            axios.get(url,{
              headers: {
                "Authorization":"Zoho-authtoken " + 'c4e12486fab21594d38c518a19dbdba7',
                "X-com-zoho-subscriptions-organizationid": "663298163",
                "Content-Type": "application/json"
              }
            })
            .then(result => {
              console.log(result.data);
              const subId = result.data.data.subscription.subscription_id;
              const zohoContact = {
                "Subscription ID": subId
              }
              zoho.execute('crm','Contacts','updateRecords',zohoId,[zohoContact],(err,userData)=>{
                  if(err){
                    res.redirect('/');
                  }
                  //window.location.href = "/Profile";
                  res.redirect(redirect);
              })
            })
            
          })
          .catch(err => res.status(422).json(err));

  },
  getForm: (req,res) => {
    const url = 'https://subscriptions.zoho.com/api/v1/hostedpages/newsubscription';
    var zohoContact = {
    	"First Name"   : req.body.firstName,
			"Last Name"    : req.body.lastName,
			"Mailing Street" : req.body.address,
			"Mailing City" : req.body.city,
			"Mailing State": req.body.state,
      "Mailing Zip"  : req.body.zip,
      
  
    }

    console.log("Create form payload: ");
    console.log(req.body);
    let redirect;
    if(process.env.NODE_ENV === "production"){
      redirect = 'https://afternoon-tor-85875.herokuapp.com/api/users/subscriptions/new';
    }
    else {
      redirect = 'http://127.0.0.1:3001/api/users/subscriptions/new';
    }

    var zohoObject = {
      "customer": {
          "display_name": req.body.firstName + ' ' + req.body.lastName,
          "first_name": req.body.firstName,
          "last_name": req.body.lastName,
          "email": req.body.username,
          "billing_address": {
              "attention": req.body.firstName + ' ' + req.body.lastName,
              "street": req.body.address,
              "city": req.body.city,
              "state": "MO",
              "country": "U.S.A",
              "zip": req.body.zip
          },
          "shipping_address": {
            "attention": req.body.firstName + ' ' + req.body.lastName,
            "street": req.body.address,
            "city": req.body.city,
            "state": "MO",
            "country": "U.S.A",
            "zip": req.body.zip
          },
          "payment_terms": 1,
          "payment_terms_label": "Due On Receipt",
          "is_taxable": true
      },
      "plan": {
          "plan_code": req.body.servicelevel,
          "billing_cycles": -1,
          "trial_days": 0
      },
      
    
      "additional_param": "new_subscription",
      "starts_at": "2018-03-16",
      "redirect_url": redirect
  }

    axios.post(url,zohoObject,{
      headers: {
        "Authorization":"Zoho-authtoken " + 'c4e12486fab21594d38c518a19dbdba7',
        "X-com-zoho-subscriptions-organizationid": "663298163",
        "Content-Type": "application/json"

      }
    })
    .then(result => {
      res.send(result.data.hostedpage.url);
    })
      
    
  },
  getSubscription: (req,res) => {
    const subId = req.params.subId;
    const url = 'https://subscriptions.zoho.com/api/v1/hostedpages/updatecard';
    
    let redirect;
    if(process.env.NODE_ENV === "production"){
      redirect = 'https://afternoon-tor-85875.herokuapp.com/Profile';
    }
    else {
      redirect = 'http://127.0.0.1:3000/Profile';
    }

    const zohoObject = {
      "subscription_id": subId,
      "additional_param": "update_card",
      "auto_collect": true,
      "redirect_url": redirect
    }
    console.log(zohoObject);
    axios.post(url,zohoObject,{
      headers: {
        "Authorization":"Zoho-authtoken " + 'c4e12486fab21594d38c518a19dbdba7',
        "X-com-zoho-subscriptions-organizationid": "663298163",
        "Content-Type": "application/json"

      }
    }).then(result => {
      console.log('result from zoho sub update:');
      console.log(result.data.hostedpage.url);
      res.send(result.data.hostedpage.url);
    })



  }
}