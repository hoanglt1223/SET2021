const http = require('http');
const url = require('url');
require('dotenv').config();
const fs = require("fs");
const routers = require('./routers/routers');

let hostname = process.env.HOST;
let port = process.env.PORT;

// define server  
const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  let routeUrl = url.parse(request.url, true);
  // routeUrl = getRouter(routeUrl);
  routeUrl = handleUrl(routeUrl);
  let controller = routers[routeUrl];
  return controller[request.method][routeUrl](response, request);
});

function handleUrl(routeUrl) {
  if (routeUrl.search("/tasks") == -1 && routeUrl.search("/users") == -1){
    routeUrl = "error"
  } else if (routeUrl.search("/tasks") == -1){
    routeUrl = "/users"
  } else {
    routeUrl = "/tasks"
  } 
  return routeUrl;
} 

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});




