const db = require("../models");

// Defining methods for the contentController
module.exports = {
  findContent: function(req,res){
    db.Content
      .findOne({component:req.params.component})
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  }, 
  update: function(req,res){
    console.log(req.params.component);
    db.Content
      .findOneAndUpdate({component:req.params.component}, req.body)
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  },
  postContent: function(req,res){
    db.Content 
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findAll: function(req,res){
    db.Content
      .find()
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  }
};

