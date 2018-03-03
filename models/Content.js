const mongoose = require('mongoose')
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const ContentSchema = new Schema({

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
const Content = mongoose.model("Content", ContentSchema);

// Export the Content model
module.exports = Content;
