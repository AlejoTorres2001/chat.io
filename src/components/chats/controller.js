const store = require("./store");

function addChat(users,name) {
  if (!users || !users.length > 0) {
    return Promise.reject("Users are required");
  }
  const chatData = {
    name:name,
    createdAt: new Date(),
    users: users,
    unreadMessages: 0,
  };
  return store.addChat(chatData);
}
function deleteChat(chatId) {
  return store.deleteChat(chatId);
}
async function updateChat(chatId, users, name) {
  if (!chatId) {
    return Promise.reject("Chat id is required");
  }

  const chat = await store.getChat(chatId);

  const newUsers = [...chat.users, ...users];

  const newName = name ? name : chat.name;
  return store.updateChat(chatId, { users: newUsers, name: newName });
}

function getChat(chatId) {
  if (!chatId) {
    return Promise.reject("Chat id is required");
  }
  return store.getChat(chatId);
}
function getAllChats() {
  return store.getAllChats();
}
function getUserChats(userId) {
  if (!userId) {
    return Promise.reject("User id is required");
  }
  return store.getUserChats(userId);
}
function updateImage(chatId, image) {
  if (!chatId || !image) {
    return Promise.reject("Chat id and image are required");
  }
  return store.updateImage(chatId, image);
}
function updateChatLastMessage(chatId, messageId) {
  if (!chatId || !messageId) {
    return Promise.reject("Chat id and message id are required");
  }
  return store.updateChatLastMessage(chatId, messageId);
}
function addUnreadMessage (chatId) {
  if (!chatId) {
    return Promise.reject("Chat id is required");
  }
  return store.addUnreadMessage(chatId);
}
function removeUnreadMessages (chatId) {
  if (!chatId) {
    return Promise.reject("Chat id is required");
  }
  return store.removeUnreadMessages(chatId);
}
function addReader (chatId, userId) {
  if (!chatId || !userId) {
    return Promise.reject("Chat id and user id are required");
  }
  return store.addReader(chatId, userId);
}

module.exports = {
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
  addReader,
};
