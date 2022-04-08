const express = require("express");
const router = express.Router();

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
      res.send(chat);
    })
    .catch((err) => {
      res.status(500)
      res.send(err);
    });
})
router.delete("/delete", function (req, res) {
  const id = req.body.id;
  deleteChat(id)
    .then((chat) => {
      if (!chat) {
        res.status(404).send("Chat not found");
        return
      }
      res.send(chat);
    })
    .catch((err) => {
      res.status(500)
      res.send(err);
    });
})
router.put("/", function (req, res) {
  const id = req.body?.id;
  const users = req.body?.users;
  const name = req.body?.name;
  updateChat(id, users,name)
    .then((chat) => {
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
      res.send(chat);
    })
    .catch((err) => {
      res.status(500)
      res.send(err);
    });
})






module.exports = router;
