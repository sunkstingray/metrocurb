var Zoho = require('node-zoho');
var token = "819a8ad65f01c4aa231231e8d6b5ad81";
var zoho = new Zoho({authToken:token});
var records = [
  {
    "Lead Source" : "Online Store",
    "First Name"  : "Leonard",
    "Last Name"   : "Galey",
    "Email"       : "test@testerson.com",
    "Description" : "Created from Express Route"
  }
];


module.exports = {
  getLeads: cb => {
      zoho.execute('crm', 'Leads', 'getRecords',{}, cb);//return all leads as array (JSON)
  },
  createContact: cb => {
      zoho.execute('crm','Contacts','insertRecords',records,cb);//test contact only, creates hard coded contact listed above
  }
}
