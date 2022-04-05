const store = require("./store");

function addMessage(messageText, fromUserId, isGlobal = true, chatId = null) {
  if (!messageText || !fromUserId) {
    return Promise.reject("Message text and fromUserId are required");
  }
  const messageData = {
    message: messageText,
    user: fromUserId,
    global: isGlobal,
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

module.exports = {
  addMessage,
  deleteMessage,
  getMessages,
  getUserMessages,
};
