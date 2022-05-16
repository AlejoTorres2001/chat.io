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
async function addUnreadMessage(chatId) {
  const chat = await Model.findById(chatId)
  return Model.findByIdAndUpdate(chatId, { unreadMessages: chat.unreadMessages +1 }, { new: true });
}
async function removeUnreadMessages(chatId) {
  return Model.findByIdAndUpdate(chatId, { unreadMessages: 0}, { new: true });
}
async function addReader (chatId, userId) {

  const chat = await Model.findById(chatId)
  const readers = chat.readers
  if (readers.find(userId)) return Promise.reject("User is already in the readers list")
  return Model.findByIdAndUpdate(chatId, { readers: [...readers,userId] }, { new: true });
}
module.exports={
  addChat,
  deleteChat,
  updateChat,
  getChat,
  getAllChats,
  getUserChats,
  updateImage,
  updateChatLastMessage,
  addUnreadMessage,
  removeUnreadMessages,
  addReader
}