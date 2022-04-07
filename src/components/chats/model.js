const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const chatSchema = new Schema({
  image: { type: String, required: false },
  createdAt: Date,
  users: [{
    type: Schema.ObjectId,
    ref: "User",
    required:true,
  }],
});

const model = mongoose.model("chat", chatSchema);

module.exports = model;


