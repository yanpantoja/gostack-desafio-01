const express = require('express');

const server = express();

server.get('/projects', (req, res) => {
  return res.json({ message: "teste" })
})

server.listen(3333);
