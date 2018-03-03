const db = require("../models");

// Defining methods for the contentController
module.exports = {
  findContent: function(req,res){
    // console.log(req.params.component)
    console.log(req.params.component);
    db.Content
      .findOne({component:req.params.component})
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  }, 
  update: function(req,res){
    db.Content
      .findOneAndUpdate({content:req.params.content}, req.body)
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  },
  postContent: function(req,res){
    db.Content 
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
};
