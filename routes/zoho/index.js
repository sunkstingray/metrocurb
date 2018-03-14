var Zoho = require('node-zoho');
var token = "819a8ad65f01c4aa231231e8d6b5ad81";
var zoho = new Zoho({ authToken: token });
var axios = require('axios');

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
  getForm: (req,res) => {
    const url = 'https://subscriptions.zoho.com/api/v1/hostedpages/newsubscription';
    var zohoContact = {
    	"First Name"   : req.body.firstName,
			"Last Name"    : req.body.lastName,
			"Mailing Street" : req.body.address,
			"Mailing City" : req.body.city,
			"Mailing State": req.body.state,
			"Mailing Zip"  : req.body.zip
    }

    var zohoObject = {
      "customer": {
          "display_name": "Bowman Furniture",
          "salutation": "Mr.",
          "first_name": "Benjamin",
          "last_name": "George",
          "email": "benjamin.george@bowmanfurniture.com",
          "company_name": "Bowman Furniture",
          "billing_address": {
              "attention": "Benjamin George",
              "street": "Harrington Bay Street",
              "city": "Salt Lake City",
              "state": "CA",
              "country": "U.S.A",
              "zip": "92612",
              "fax": "4527389"
          },
          "shipping_address": {
              "attention": "Benjamin George",
              "street": "Harrington Bay Street",
              "city": "Salt Lake City",
              "state": "CA",
              "country": "U.S.A",
              "zip": "92612",
              "fax": "4527389"
          },
          "payment_terms": 1,
          "payment_terms_label": "Due On Receipt",
          "is_taxable": true
      },
      "plan": {
          "plan_code": "10",
          "billing_cycles": -1,
          "trial_days": 0
      },
      
      "reference_id": "bowmanfurniture",
      "additional_param": "new_subscription",
      "starts_at": "2018-03-13",
      "redirect_url": "https://afternoon-tor-85875.herokuapp.com/profile"
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
      
    
  }
}