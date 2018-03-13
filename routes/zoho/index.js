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
  },

  findById: (req,res) => {
      var zohoId = req.params.zohoId;
      console.log("zohohoid: " + zohoId);

      zoho.execute('crm','Contacts','getRecordById',zohoId,function(err,userData){
        if(err){
          console.log(err);
        }
        else {
          res.send(userData.data);
          console.log(userData.data);
        }
      });
  },
  updateContact: (req,res) => {
      var zohoId = req.params.zohoId;
      console.log("PUT zohohoid: " + zohoId);
      console.log(req.body);

      zoho.execute('crm','Contacts','updateRecords',zohoId,[req.body],function(err,userData){
        if(err){
          console.log(err);
        }
        else{
          res.send(userData.data);
          console.log(userData.data);
        }
      });
  }
}