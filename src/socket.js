const socketIO = require("socket.io");
const socket = {};
function connect(server) {
  socket.io = socketIO(server,{cors:{
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  }});
}
module.exports = {
  socket,
  connect,
};
