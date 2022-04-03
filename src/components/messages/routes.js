const express = require("express");
const router = express.Router();
const {addMessage} = require("./controller");
router.post("/", function (req, res) {
  const messageText = req.body.message;
  const fromUserId = req.body.fromUserId;
  const isGlobal = req.body?.isGlobal ? req.body?.isGlobal : true; 
  const toUsers = req.body?.toUsers ? req.body.toUsers : [];
  addMessage(messageText,fromUserId,isGlobal,toUsers)
    .then((message) => {
      res.send(message);
    })
    .catch((err) => {
      res.send(err);
    });
})


module.exports = router;