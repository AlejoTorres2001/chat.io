require("dotenv").config();
const express = require("express");
const users = require("./components/users/routes");
const app = express();
const port = 3000;
const server = require("http").Server(app);
const { connectDb } = require("./db");
const { connect: connectToSocket, socket } = require("./socket");
app.use(express.json());
app.use("/users", users);
connectToSocket(server);
connectDb();

server.listen(port, () => console.log("Server is running on port " + port));