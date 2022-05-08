const store = require("./store");

function addMessage(messageText, fromUserId,chatId) {
  if (!messageText || !fromUserId) {
    return Promise.reject("Message text and fromUserId are required");
  }
  const messageData = {
    message: messageText,
    user: fromUserId,
    chat: chatId,
    createdAt: new Date(),
  };
  return store.addMessage(messageData);
}
function deleteMessage(messageId) {
  if (!messageId) {
    return Promise.reject("Message id is required");
  }
  return store.deleteMessage(messageId);
}
function getMessages() {
  return store.getMessages();
}
function getUserMessages(userId) {
  if (!userId) {
    return Promise.reject("User id is required");
  }
  return store.getUserMessages(userId);
}

function getMessage(messageId) {
  if (!messageId) {
    return Promise.reject("Message id is required");
  }
  return store.getMessage(messageId);
}

function getChatMessages(chatId) {
  if (!chatId) {
    return Promise.reject("Chat id is required");
  }
  return store.getChatMessages(chatId);
}

module.exports = {
  addMessage,
  deleteMessage,
  getMessages,
  getUserMessages,
  getMessage,
  getChatMessages,
};
