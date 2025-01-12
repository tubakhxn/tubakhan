const server = require('http').createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000", // Your frontend URL
    methods: ["GET", "POST"],
  },
  transports: ["polling", "websocket"], // Allow both polling and WebSocket
});

server.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
