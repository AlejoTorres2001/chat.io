// create a mognoose schema for users
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  image:{type: String, required: false},
  name: String,
});

const model = mongoose.model("User", userSchema);

module.exports = model;
