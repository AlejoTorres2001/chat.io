const store = require("./store");

function addChat(users) {
  const chatData = {
    createdAt: new Date(),
    users: users,
  };
  return store.addChat(chatData);
}
function deleteChat(chatId) {
  return store.deleteChat(chatId);
}
async function updateChat(chatId, users) {
  const chat = await store.getChat(chatId)
  const newUsers = [...chat.users,...users];
  return store.updateChat(chatId, { users: newUsers });

}


function getChat(chatId) {
  return store.getChat(chatId);
}
function getAllChats() {
  return store.getAllChats();
}
function getUserChats(userId) {
  return store.getUserChats(userId);
}
module.exports={
  addChat,
  deleteChat,
  updateChat,
  getChat,
  getAllChats,
  getUserChats,
}