const http = require('http');

const server = http.createServer(function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
});

server.listen(8080);