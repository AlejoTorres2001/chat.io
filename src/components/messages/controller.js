const store = require("./store");

function addMessage(messageText, fromUserId, isGlobal = true, toUsers = []) {
  const messageData = {
    message: messageText,
    user: fromUserId,
    global: isGlobal,
    toUsers: toUsers,
    date: new Date(),
  };
  return store.addMessage(messageData);
}

module.exports = {
  addMessage,
};
