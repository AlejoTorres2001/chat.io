const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const chatSchema = new Schema({
  image: { type: String, required: false },
  createdAt: Date,
  lastMessage: {
    type:Schema.ObjectId,
    ref: "Message",
    required: false
  },
  users: [{
    type: Schema.ObjectId,
    ref: "User",
    required:true,
  }],
  name:{
    type:String,
    required:false,
  },
  unreadMessages: {
    type: Number,
    required: false,
  }
});

const model = mongoose.model("chat", chatSchema);

module.exports = model;


