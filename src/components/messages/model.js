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
  createdAt: Date,
  chat:{
    type: Schema.ObjectId,
    ref:"Chat",
    required: true,
  }
});

const model = mongoose.model("message", messageSchema);

module.exports = model;
