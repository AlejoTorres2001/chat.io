const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const {
  addUser,
  updateUser,
  DeleteUser,
  getUser,
  getAllUsers,
  checkIfUserExists,
} = require("./controller");
const { createToken, validateToken } = require("../../jwt");

router.get("/userInfo/:userId", validateToken, (req,res)=>{
  getUser(req.params.userId).then((user)=>{
    res.json({
      username: user.username,
      image: user.image,
    });
  }).catch((err)=>{
    res.status(500).json({
      message: err.message,
    });
  })
});

router.get("/whoami",validateToken, (req, res) => {
  getUser(req.userId).then((user) => {
    res.json({
      auth: true,
      user: {id: user.id, username: user.username},
    });

  })
});
router.post("/register", function (req, res) {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    const newUser = {
      username: username,
      password: hash,
    };
    checkIfUserExists(username)
      .then((user) => {
        if (user) {
          res.status(400).json({
            message: "User already exists",
          });
        } else {
          addUser(newUser).then((user) => {
            res.status(201).json({
              message: "User created",
              user,
            });
          });
        }
      })
      .catch((err) => {
        res.status(500);
        res.send(err);
      });
  });
});
router.post("/login", async function (req, res) {
  const { username, password } = req.body;
  let user;
  try {
    user = await checkIfUserExists(username);
  } catch (error) {
    res.status(500).send(error);
  }
  if (!user) {
    res.status(400).json({
      message: "User does not exist",
    });
  } else {
    bcrypt.compare(password, user.password).then((match) => {
      if (match) {
        const accesToken = createToken(user)
        res.cookie("access_token", accesToken, {
          maxAge: 60*60*1000,
          sameSite:'none', //?Should work on prod bc will be 2 different domains
          httpOnly: true,
          secure: true,
        })
        res.status(200).json({
          auth: true,
          user:{username:user.username,id:user._id},
          message: "User logged in"});
        } else {
          res.status(400).json({
            auth: false,
            message: "Wrong password",
          });
        }
      });
    }
  });
router.put("/:id", validateToken, async function (req, res) {
  const id = req.params.id;
  const user = await getUser(id);
  const newUsername = req.body.username ? req.body.username : user.username;
  const newPassword = req.body.password ? req.body.password : user.password;
  const checkForUser = await checkIfUserExists(newUsername);
  if (checkForUser) res.status(400).send("User already exists");
  updateUser(id, { username: newUsername, password: newPassword })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
});
router.put("/image/:id", validateToken, function (req, res) {
  const id = req.params.id;
  const image = req.body.image;
  updateImage(id, image)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
});
router.delete("/delete/:id", validateToken, function (req, res) {
  const id = req.params.id;
  DeleteUser(id)
    .then((user) => {
      if (!user) {
        res.status(404).send("User not found");
        return;
      }
      res.send(user);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
});

router.get("/", validateToken, function (req, res) {
  getAllUsers()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
});
router.get("/:id", validateToken, function (req, res) {
  const id = req.params.id;

  getUser(id)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
});

module.exports = router;
