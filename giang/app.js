const http = require("http");

const hostname = "127.0.0.1";
const port = 3003;
const routes = require("./routes");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  const routeUrl = req.url.split("?")[0];
  const method = req.method;
  const router = getRouter(req);
  const controller = router[method][routeUrl];

  return controller(req, res);
});

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
