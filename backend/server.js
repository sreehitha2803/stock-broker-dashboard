const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Store subscriptions for each user
const userSubscriptions = {};

io.on("connection", (socket) => {
  console.log("User Connected:", socket.id);

  socket.on("subscribe", ({ email, stock }) => {
    if (!userSubscriptions[email]) {
      userSubscriptions[email] = [];
    }

    if (!userSubscriptions[email].includes(stock)) {
      userSubscriptions[email].push(stock);
    }

    console.log(email, "subscribed to", stock);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected:", socket.id);
  });
});

// Generate fake stock prices every second
setInterval(() => {
  Object.keys(userSubscriptions).forEach((email) => {
    userSubscriptions[email].forEach((stock) => {
      io.emit("priceUpdate", {
        email,
        stock,
        price: (Math.random() * 1000 + 500).toFixed(2)
      });
    });
  });
}, 1000);

server.listen(5000, () => {
  console.log("Server Running on http://localhost:5000");
});