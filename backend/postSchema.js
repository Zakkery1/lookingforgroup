const mongoose = require("mongoose");

var postSchema = mongoose.Schema({
  name: String,
  email: String,
  picture: String,
  body: String,
  date: {
    type: Date,
    default: Date.now,
  },
  timestamp: String,
});

const postModel = mongoose.model("userPost", postSchema);

module.exports = postModel;
