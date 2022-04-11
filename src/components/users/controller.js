const store = require("./store");

function addUser(user) {
  if (!user) {
    return Promise.reject("name is required");
  }
  return store.add(user);
}
function updateUser(id, newUserData) {
  if(!id || !newUserData){
    return Promise.reject("id and newUserData are required");
  }
  return store.update(id, newUserData);
}
function DeleteUser(id) {
  if(!id){
    return Promise.reject("id is required");
  }
  return store.remove(id);
}

function getAllUsers() {
  return store.getAll();
}
function getUser(id) {
  if(!id){
    return Promise.reject("id is required");
  }
  return store.getUser(id);
}
function updateUserImage(id, image) {
  if(!id || !image){
    return Promise.reject("id and image are required");
  }
  return store.updateUserImage(id, image);
}
function checkIfUserExists(username) {
  if (!username) {
    return Promise.reject("Username is required");
  }
  return store.checkIfUserExists(username);
}

module.exports = {
  addUser,
  updateUser,
  DeleteUser,
  getAllUsers,
  getUser,
  updateUserImage,
  checkIfUserExists
};
