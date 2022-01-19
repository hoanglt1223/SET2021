const http = require("http");
const mongoose = require("mongoose");
const middleware = require("./helper/middleware");
require("dotenv").config();

const hostname = "127.0.0.1";
const port = 3003;
const routes = require("./routes");

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
  "Access-Control-Max-Age": 2592000, // 30 days
  /** add other headers as per requirement */
  "Content-Type": "text/plain",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, headers);
  const router = getRouter(req);

  return middleware(router, req, res);
});

async function main() {
  await mongoose.connect(process.env.DB_URL);
}

main().catch((err) => console.log(err));
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function getRouter(req) {
  const routeUrl = req.url.split("?")[0];

  switch (routeUrl) {
    case "/tasks":
      return routes.task;
    case "/image":
      return routes.image;
    default:
      return {};
  }
}
