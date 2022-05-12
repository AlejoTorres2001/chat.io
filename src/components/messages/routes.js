const express = require("express");
const { socket } = require("../../socket");
const router = express.Router();
const {
  addMessage,
  deleteMessage,
  getMessages,
  getUserMessages,
  getMessage,
  getChatMessages,
} = require("./controller");
const {updateChatLastMessage,addUnreadMessage} = require("../chats/controller");
const { validateToken } = require("../../jwt");

router.post("/",validateToken, function (req, res) {
  const messageText = req.body.message;
  const fromUserId = req.body.fromUserId;
  const chatId = req.body.chatId;
  addMessage(messageText, fromUserId, chatId)
    .then((message) => {
      updateChatLastMessage(chatId, message._id).then(
        (chat) => {
            addUnreadMessage(chatId).then((chat)=>{
              socket.io.emit("updatedChatLastMessage", chat);
            })
          });
      socket.io.emit("newMessage", message);
      res.send(message);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
});

router.delete("/delete/:id",validateToken, function (req, res) {
  const id = req.params.id;
  deleteMessage(id)
    .then((message) => {
      if (!message) {
        res.status(404).send("Message not found");
        return;
      }
      res.send(message);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
});
router.get("/",validateToken, function (req, res) {
  getMessages()
    .then((messages) => {
      res.send(messages);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
});
router.get("/:userId",validateToken, function (req, res) {
  const userId = req.params.userId;
  getUserMessages(userId)
    .then((messages) => {
      res.send(messages);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
});
router.get("/message/:id",validateToken, function (req, res) {
  const id = req.params.id;
  getMessage(id)
    .then((message) => {
      res.send(message);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
})
router.get("/chat/:chatId",validateToken,function (req,res){
  const chatId = req.params.chatId;
  getChatMessages(chatId).then((messages)=>{
    res.send(messages);
  }).catch((err)=>{
    res.status(500);
    res.send(err);
  })
})

module.exports = router;
