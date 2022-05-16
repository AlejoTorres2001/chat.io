const express = require("express");
const { validateToken } = require("../../jwt");
const router = express.Router();
const { socket } = require("../../socket");
const {
  addChat,
  deleteChat,
  updateChat,
  getAllChats,
  getChat,
  getUserChats,
  updateImage,
  removeUnreadMessages,
  addReader
} = require("./controller");

router.get("/",validateToken, function (req, res) {
  getAllChats()
    .then((chats) => {
      res.send(chats);
    })
    .catch((err) => {
      res.status(500)
      res.send(err);
    });
})
router.get("/chat/:id",validateToken, function (req, res) {
  const id = req.params.id;
  getChat(id)
    .then((chat) => {
      res.send(chat);
    })
    .catch((err) => {
      res.status(500)
      res.send(err);
    });
})
router.get("/:userId",validateToken, function (req, res) {
  const userId = req.params.userId;
  getUserChats(userId)
    .then((chats) => {
      res.send(chats);
    })
    .catch((err) => {
      res.status(500)
      res.send(err);
    });
})
router.post("/",validateToken, function (req, res) {
  const users = req.body.users;
  const name = req.body.name? req.body.name : null;
  addChat(users,name)
    .then((chat) => {
      socket.io.emit("newChat", chat);
      res.send(chat);
    })
    .catch((err) => {
      res.status(500)
      res.send(err);
    });
})
router.delete("/delete/:id",validateToken, function (req, res) {
  const id = req.params.id;
  deleteChat(id)
    .then((chat) => {
      if (!chat) {
        res.status(404).send("Chat not found");
        return
      }
      socket.io.emit("deletedChat", chat);
      res.send(chat);
    })
    .catch((err) => {
      res.status(500)
      res.send(err);
    });
})
router.put("/:id",validateToken, function (req, res) {
  const id = req.params.id;
  const users = req.body?.users ? req.body.users : [];
  const name = req.body?.name;
  updateChat(id,users,name)
    .then((chat) => {
      socket.io.emit("updatedChat", chat);

      res.send(chat);
    })
    .catch((err) => {
      res.status(500)
      res.send(err);
    });
})
router.put("/image",validateToken, function (req, res) {
  const id = req.body.id;
  const image = req.body.image;
  updateImage(id, image)
    .then((chat) => {
      socket.io.emit("updatedChat", chat);
      res.send(chat);
    })
    .catch((err) => {
      res.status(500)
      res.send(err);
    });
})

router.put("/readmessages/:id",validateToken, function (req, res) {
  const chatId = req.params.id;
  const senderUserId =req.userId;
  getChat(chatId).then((chat) => {
    if(!chat.readers.find(senderUserId)){
        addReader(senderUserId)
    }
  })
  //! should add the reader if not already there
  //! emit event to update ui
  //! in UI update the number of unread messages only if id is in the reader list
  //! the number of unread messages should be controlled from the ui independently
  //! makea provider in the ui with the state of how many unread messages there are per chat, save in cookie, if no cookie, set to []
  //!all chats load in the cookie at first when log in
  //! if the chat is not in the cookie, add it
  // removeUnreadMessages(chatId).then((chat) => {
  //   socket.io.emit("readMessages", chat);
  //   res.send(chat);
  // })
  // .catch((err) => {
  //   res.status(500)
  //   res.send(err);
  // });
})





module.exports = router;
