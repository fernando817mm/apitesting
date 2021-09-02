require("dotenv").config();

const path = require("path");

const express = require("express");
const server = express();
const cors = require("cors");
const morgan = require("morgan");

const PORT = process.env.PORT || 500; //fallback in case next dev does not create .env file

// const API_SECRET = process.env.API_SECRET;

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));
server.use(express.static(path.join(__dirname, "client/build")));

server.get("/api", (req, res) => {
  res.json({
    message: `web 45 is awesome!`,
  });
});

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
