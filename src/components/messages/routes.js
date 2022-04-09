const express = require("express");
const { socket } = require("../../socket");
const router = express.Router();
const {
  addMessage,
  deleteMessage,
  getMessages,
  getUserMessages,
  getMessage,
} = require("./controller");
const {updateChatLastMessage} = require("../chats/controller");
router.post("/", function (req, res) {
  const messageText = req.body.message;
  const fromUserId = req.body.fromUserId;
  const chatId = req.body?.chatId ? req.body.chatId : null;
  addMessage(messageText, fromUserId, chatId)
    .then((message) => {
      updateChatLastMessage(chatId, message._id).then(
        (chat) => {
          socket.io.emit("updatedChatLastMessage", chat);
        }
      )
      socket.io.emit("newMessage", message);
      res.send(message);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
});

router.delete("/delete/:id", function (req, res) {
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
router.get("/", function (req, res) {
  getMessages()
    .then((messages) => {
      res.send(messages);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
});
router.get("/:userId", function (req, res) {
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
router.get("/message/:id", function (req, res) {
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

module.exports = router;
