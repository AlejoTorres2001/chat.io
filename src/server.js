require("dotenv").config();
const express = require("express");
const cors = require('cors');
const users = require("./components/users/routes");
const messages = require("./components/messages/routes");
const chats = require("./components/chats/routes");
const app = express();
const port = 3000;
const server = require("http").Server(app);
const { connectDb } = require("./db");
const { connect: connectToSocket, socket } = require("./socket");
app.use(cors({
  origin: 'http://localhost:3001',
}))
app.use(express.json());
app.use("/users", users);
app.use("/messages",messages)
app.use("/chats",chats)
connectToSocket(server);
connectDb();

server.listen(port, () => console.log("Server is running on port " + port));
