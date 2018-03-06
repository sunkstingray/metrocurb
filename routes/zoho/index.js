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
  createContact: (data,cb) => {
      zoho.execute('crm','Contacts','insertRecords',[data],cb);
  }
}
  // findOne: (username,cb) => {
  //     return User.findOne({ 'local.username': username }, (err, user) => {
  //       if (err) {
  //           return res.json({
  //             error: `Sorry, unable to find that user`
  //             })
  //       }
  //     }
  // }
