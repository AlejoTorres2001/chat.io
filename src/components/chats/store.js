const Model = require("./model");

function addChat(chatData) {
  const newChat = new Model(chatData);
  return newChat.save();
}
function deleteChat(chatId) {
  return Model.findByIdAndDelete(chatId);
}
function updateChat(chatId, newChatData) {
  return Model.findByIdAndUpdate(chatId, newChatData,{new:true});
}
function getChat(chatId) {
  return Model.findById(chatId);
}
function getAllChats() {
  return Model.find();
}
function getUserChats(userId) {
  return Model.find({ users: userId });
}
function updateImage(chatId, image) {
  return Model.findByIdAndUpdate(chatId, { image: image }, { new: true });
}
function updateChatLastMessage(chatId, messageId) {
  return Model.findByIdAndUpdate(chatId, { lastMessage: messageId }, { new: true });
}
module.exports={
  addChat,
  deleteChat,
  updateChat,
  getChat,
  getAllChats,
  getUserChats,
  updateImage,
  updateChatLastMessage
}