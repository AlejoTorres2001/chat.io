const Model = require("./model");

function addMessage(messageData) {
  const newMessage = new Model(messageData);
  return newMessage.save();
}

function deleteMessage(messageId) {
  return Model.findByIdAndDelete(messageId);
}

function getMessages() {
  return Model.find();
}
function getUserMessages(userId) {
  return Model.find({ user: userId });
}
function getMessage(messageId) {
  return Model.findById(messageId);
}
function getChatMessages(chatId) {
  return Model.find({ chat: chatId });
}

module.exports = {
  addMessage,
  deleteMessage,
  getMessages,
  getUserMessages,
  getMessage,
  getChatMessages,
};
