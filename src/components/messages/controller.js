const { socket } = require("../../socket");
const store = require("./store");

function addMessage(messageText, fromUserId, isGlobal = true, chatId = null) {
  return new Promise((resolve, reject) => {
    const messageData = {
      message: messageText,
      user: fromUserId,
      global: isGlobal,
      chat: chatId,
      createdAt: new Date(),
    };
    store.addMessage(messageData);
    socket.io.emit('message', messageData);

    resolve(messageData);
  })
  
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
