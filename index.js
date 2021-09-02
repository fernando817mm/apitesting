const express = require("express");
const server = express();
const cors = require("cors");
const morgan = require("morgan");

const PORT = process.env.PORT || 5000;

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

console.log(process.env.USER);

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
