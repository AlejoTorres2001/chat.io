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
      res.send("usuario" + userName + "creado");
    })
    .catch((err) => {
      res.send(err);
    });
});
router.post("/update", function (req, res) {
  const id = req.body.id;
  const newUserData = req.body.newUserData;
  updateUser(id, newUserData)
    .then((user) => {
      res.send("usuario" + id + "actualizado");
    })
    .catch((err) => {
      res.send(err);
    });
});
router.delete("/delete", function (req, res) {
  const id = req.body.id;
  DeleteUser(id)
    .then((user) => {
      res.send("usuario" + id + "eliminado");
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/", function (req, res) {
  getAllUsers()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
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
      res.send(err);
    });
});

module.exports = router;
