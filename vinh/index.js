const database = require('./database');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const reqUrl = '';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.writeHead(200, {
    "Context-type" : "text/html"
});
  
  res.write(req.url);
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

