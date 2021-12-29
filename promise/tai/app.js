const http = require('http');
require('dotenv').config();
const axios = require('axios');
const fs = require("fs");
const routers = require('./routers/routers');

let hostname = process.env.HOST;
let port = process.env.PORT;

// define server  
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  let routeUrl = req.url.split("?")[0]
  let unhandledRouteUrl = routeUrl;
  if (routeUrl.search("/tasks") == -1){
    routeUrl = "/image"
  } else {
    routeUrl = "/tasks"
  }
  let controller = routers[routeUrl];
  return controller[req.method][routeUrl](unhandledRouteUrl, res, req);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});




