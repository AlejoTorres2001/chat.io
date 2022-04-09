const express = require("express");
const router = express.Router();
const { socket } = require("../../socket");
const {
  addChat,
  deleteChat,
  updateChat,
  getAllChats,
  getChat,
  getUserChats,
  updateImage
} = require("./controller");

router.get("/", function (req, res) {
  getAllChats()
    .then((chats) => {
      res.send(chats);
    })
    .catch((err) => {
      res.status(500)
      res.send(err);
    });
})
router.get("/chat/:id", function (req, res) {
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
router.get("/:userId", function (req, res) {
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
router.post("/", function (req, res) {
  const users = req.body.users;
  addChat(users)
    .then((chat) => {
      socket.io.emit("newChat", chat);
      res.send(chat);
    })
    .catch((err) => {
      res.status(500)
      res.send(err);
    });
})
router.delete("/delete/:id", function (req, res) {
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
router.put("/:id", function (req, res) {
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
router.put("/image", function (req, res) {
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






module.exports = router;