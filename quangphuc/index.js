const http = require("http");
let {tasks} = require("./repositories/tasks.json");
const {routerFactory, Router} = require("./routers");
const {getPathAndQuery} = require("./utilities");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(async (req, res) => {

  const {path, query} = getPathAndQuery(req);

  const router = routerFactory.getRouter(req, res);
  await router.handle(req, res);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
