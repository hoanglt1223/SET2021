const http = require("http");
const tasks = require("./tasks.json");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  let path, query;
  [path, query] = req.url.split("?");
  path = path.replace(/^\//g, "").split("/");
  if (query) {
    query = query.split("&").reduce(
      (previousValue, currentValue) => ({
        ...previousValue,
        [currentValue.split("=")[0]]: currentValue.split("=")[1],
      }),
      {}
    );
  } else {
    query = {};
  }
  if (path[0]) {
    switch (path[0]) {
      case "tasks":
        const { tasks } = require("./tasks.json");
        if (query.id) {
          const task = tasks.find((task) => task.id === query.id);
          if (task) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(task));
          } else {
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/plain");
            res.end("Task not found");
          }
        } else {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(tasks));
        }
        break;
      case "image":
        const fs = require("fs");
        fs.readFile("image.png", function (err, data) {
          if (err) throw err; // Fail if the file can't be read.
          res.writeHead(200, { "Content-Type": "image/png" });
          res.end(data); // Send the file data to the browser.
        });
        break;
    }
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
