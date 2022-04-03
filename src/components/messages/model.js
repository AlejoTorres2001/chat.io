//create a mongoose schema for messages
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const messageSchema = new Schema({
  user:{
    type: Schema.ObjectId,
    ref: "User",
  },
  message:{
    type: String,
    required: true,
  },
  global: Boolean,
  createdAt: Date,
  toUsers: [{
    type: Schema.ObjectId,
    ref: "User",
    required:false,
  }],
});

const model = mongoose.model("message", messageSchema);

module.exports = model;
