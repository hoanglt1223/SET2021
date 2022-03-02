const mongoose = require("mongoose");
const routes = require("./routes");
const http = require("http");
const middleware = require("./helper/middleware");

const hostname = "localhost";
const port = "5500";

const uri =
  "mongodb://tiensp:tien123456@nodemvc-shard-00-00.f3wlj.mongodb.net:27017,nodemvc-shard-00-01.f3wlj.mongodb.net:27017,nodemvc-shard-00-02.f3wlj.mongodb.net:27017/test?replicaSet=atlas-dzqe18-shard-0&ssl=true&authSource=admin";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "*",
  "Access-Control-Max-Age": 2592000,
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, headers);
  const router = getRouter(req);
  middleware(router, req, res);
});

async function main() {
  await mongoose.connect(uri);
}

main().catch((err) => console.log(err));

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function getRouter(req) {
  const routeUrl = req.url.split("?")[0];

  switch (true) {
    case routeUrl.includes("/tasks"):
      return routes.task;
    case routeUrl.includes("/users"):
      return routes.user;
    default:
      return {};
  }
}
