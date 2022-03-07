const http = require("http");
const mongoose = require("mongoose");
const logger = require("./helper/logger");
const middleware = require("./helper/middleware");
const { LogInfoType } = require("./constants");
const redisClient = require("./helper/redis");

require("dotenv").config();

const hostname = "127.0.0.1";
const port = 3003;
const routes = require("./routes");

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "*",
  "Access-Control-Max-Age": 2592000, // 30 days
  /** add other headers as per requirement */
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, User-Agent, Referer",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, headers);
  const router = getRouter(req);

  return middleware(router, req, res);
});

redisClient.on("connect", () => {
  console.log("Redis connected");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  // logger(LogInfoType.INFO, `Server running at http://${hostname}:${port}/`);
});

async function main() {
  await mongoose.connect(process.env.DB_URL);
  await redisClient.connect();
}

main().catch((err) => console.log(err));

function getRouter(req) {
  const routeUrl = req.url.split("?")[0];

  switch (true) {
    case routeUrl.includes("/tasks"):
      return routes.task;
    case routeUrl.includes("/image"):
      return routes.image;
    case routeUrl.includes("/users"):
      return routes.user;
    case routeUrl.includes("/auth"):
      return routes.auth;
    default:
      return {};
  }
}
