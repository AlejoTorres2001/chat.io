const store = require("./store");

function addChat(users) {
  if(!users || !users.length>0){
    return Promise.reject("Users are required");
  }
  const chatData = {
    createdAt: new Date(),
    users: users,
  };
  return store.addChat(chatData);
}
function deleteChat(chatId) {
  return store.deleteChat(chatId);
}
async function updateChat(chatId,users,name) {
  if(!chatId){
    return Promise.reject("Chat id is required");
  }
  console.log(chatId);
  const chat = await store.getChat(chatId)
  console.log(users)
  const newUsers = [...chat.users,...users];
  console.log(newUsers);
  const newName = name ? name : chat.name;
  return store.updateChat(chatId, { users: newUsers,name:newName });

}


function getChat(chatId) {
  if(!chatId){
    return Promise.reject("Chat id is required");
  }
  return store.getChat(chatId);
}
function getAllChats() {
  return store.getAllChats();
}
function getUserChats(userId) {
  if(!userId){
    return Promise.reject("User id is required");
  }
  return store.getUserChats(userId);
}
function updateImage(chatId, image) {
  if(!chatId || !image){
    return Promise.reject("Chat id and image are required");
  }
  return store.updateImage(chatId, image);
}
module.exports={
  addChat,
  deleteChat,
  updateChat,
  getChat,
  getAllChats,
  getUserChats,
  updateImage,
}