const store = require("./store");

function addUser(name) {
  if (!name) {
    return Promise.reject("name is required");
  }
  const user = {
    name,
  };
  return store.add(user);
}
function updateUser(id, newUserData) {
  return store.update(id, newUserData);
}
function DeleteUser(id) {
  return store.remove(id);
}

function getAllUsers() {
  return store.getAll();
}
function getUser(id) {
  return store.getUser(id);
}

module.exports = {
  addUser,
  updateUser,
  DeleteUser,
  getAllUsers,
  getUser,
};
