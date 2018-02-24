var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ContentSchema = new Schema({

  component: {
    type: String,
    required: true
  },
  content: {
    type: Array,
    required: true
  }

});

// This creates our model from the above schema, using mongoose's model method
var Content = mongoose.model("Content", ContentSchema);

// Export the Content model
module.exports = Content;
