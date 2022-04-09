const Model = require("./model");

function add(user) {
  const newUser = new Model(user);
  return newUser.save();
}

function update(id, newUser) {
  return Model.findByIdAndUpdate(id, newUser);
}

function remove(id) {
  return Model.findByIdAndDelete(id);
}
function getAll() {
  return Model.find();
}
function getUser(id) {
  return Model.findById(id);
}
function updateUserImage(id, image) {
  return Model.findByIdAndUpdate(id, { image: image }, { new: true });
}

module.exports = { add, update, remove, getAll, getUser,updateUserImage };