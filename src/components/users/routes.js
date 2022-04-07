const express = require("express");
const router = express.Router();
const {
  addUser,
  updateUser,
  DeleteUser,
  getUser,
  getAllUsers,
} = require("./controller");

router.post("/", function (req, res) {
  const userName = req.body.name;
  addUser(userName)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500)
      res.send(err);
    });
});
router.put("/", function (req, res) {
  const id = req.body.id;
  const newUserData = req.body.newUserData;
  updateUser(id, newUserData)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
});
router.put("/image", function (req, res) {
  const id = req.body.id;
  const image = req.body.image;
  updateImage(id, image)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
})
router.delete("/delete", function (req, res) {
  const id = req.body.id;
  DeleteUser(id)
    .then((user) => {
      if (!user) {
        res.status(404).send("User not found");
        return
      }
      res.send(user);
    })
    .catch((err) => {
      res.status(500)
      res.send(err);
    });
});

router.get("/", function (req, res) {
  getAllUsers()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500)
      res.send(err);
    });
});
router.get("/:id", function (req, res) {
  const id = req.params.id;

  getUser(id)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500)
      res.send(err);
    });
});

module.exports = router;
