const http = require('http');
const routers = require('./routers/routers');

const hostname = '127.0.0.1';
const port = 3000;

// define server  
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const requestUrl = req.url.split("?")[0]; //get url
  const router = getRouter(requestUrl);     //get router

  return router[req.method][requestUrl](req, res);  //execute handle method
});

// get router method
function getRouter(requestUrl) {
  switch(requestUrl) {
    case "/tasks":
      return routers.tasks;
    case "/image":
      return routers.image;
    default:
      return {};
  }
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});





