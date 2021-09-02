require("dotenv").config();

const express = require("express");
const server = express();
const cors = require("cors");
const morgan = require("morgan");

const PORT = process.env.PORT || 500; //fallback in case next dev does not create .env file

// const API_SECRET = process.env.API_SECRET;

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

server.get("/", (req, res) => {
  res.send(`
    <h1>Fernando Martinez</h1>
  `);
});

server.get("/api", (req, res) => {
  res.json({
    message: `web 45 is awesome!`,
  });
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
