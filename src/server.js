require("dotenv").config();
const express = require("express");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const users = require("./components/users/routes");
const messages = require("./components/messages/routes");
const chats = require("./components/chats/routes");
const app = express();
const port = process.env.PORT || 3000;
const server = require("http").Server(app);
const { connectDb } = require("./db");
const { connect: connectToSocket, socket } = require("./socket");

app.use(cors({
  origin: process.env.NODE_ENV !== "production"? 'http://localhost:3001' : "",
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))
app.use(cookieParser());
app.use(express.json());
app.use("/users", users);
app.use("/messages",messages)
app.use("/chats",chats)
connectToSocket(server);
connectDb();

server.listen(port, () => console.log("Server is running on port " + port));
