var mongoose = require("mongoose");

var Schema = mongoose.Schema;

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
