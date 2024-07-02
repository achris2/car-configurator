const { createServer } = require("http");
const { Server } = require("socket.io");


// hostname is currently hardcoded to localhost and wsport 8080, would change to environment variables in production 

const hostname = "localhost";
const wsPort = 8080;

const wsServer = createServer();
const io = new Server(wsServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("A user connected to WebSocket server, under id:" + socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected from WebSocket server");
  });

  socket.on("carConfiguration", (data) => {
    console.log("Car configuration received:", data);
  });
});

wsServer.listen(wsPort, () => {
  console.log(`> WebSocket server ready on ws://${hostname}:${wsPort}`);
});

wsServer.on("error", (err) => {
  console.error("WebSocket Server Error:", err);
  process.exit(1);
});