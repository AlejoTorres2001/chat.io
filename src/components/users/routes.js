const express = require('express');
const router = express.Router();
const {addUser} = require('./controller');

// define the home page route
router.post('/', function(req, res) {
  const userName = req.body.name
  addUser(userName)
  res.send('usuario'+userName+"creado");
});
module.exports = router;