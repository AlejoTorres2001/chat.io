const Model = require("./model");

function addMessage(messageData) {
  const newMessage = new Model(messageData);
  return newMessage.save();
}

module.exports = {
  addMessage,
};
