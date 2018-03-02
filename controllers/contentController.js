const db = require("../models");

// Defining methods for the contentController
module.exports = {
  findContent: function(req,res){
    console.log("contentController");
    db.Content
      .find(req.body)
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  }, 
  update: function(req,res){
    db.Content
      .findOneAndUpdate({content:req.params.content}, req.body)
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  }
};
