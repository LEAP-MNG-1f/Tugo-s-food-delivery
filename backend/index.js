import express from "express";
import cors from cors

const server = express();
const PORT = 8000;

server.use(cors())

server.get("/", (req, res) => {
  res.json(["Tugo"]);
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} deer backend ajillaj bn`);
});
