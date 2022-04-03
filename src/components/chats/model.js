const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const chatSchema = new Schema({
  createdAt: Date,
  users: [{
    type: Schema.ObjectId,
    ref: "User",
    required:true,
  }],
});

const model = mongoose.model("chat", chatSchema);

module.exports = model;


