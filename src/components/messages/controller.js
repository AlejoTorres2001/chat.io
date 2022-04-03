const store = require("./store");

function addMessage(messageText, fromUserId, isGlobal = true, toUsers = []) {
  const messageData = {
    message: messageText,
    user: fromUserId,
    global: isGlobal,
    toUsers: toUsers,
    createdAt: new Date(),
  };
  return store.addMessage(messageData);
}
function deleteMessage(messageId) {
  return store.deleteMessage(messageId);
}
function getMessages(){
  return store.getMessages();
}
function getUserMessages(userId){
  return store.getUserMessages(userId);
}

module.exports = {
  addMessage,
  deleteMessage,
  getMessages,
  getUserMessages,
};
