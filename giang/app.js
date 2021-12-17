const http = require("http");
const fs = require("fs");
const mockData = require("./mock-data.json");

const hostname = "127.0.0.1";
const port = 3003;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  if (req.method === "GET") {
    const routeUrl = req.url.split("?")[0];

    switch (routeUrl) {
      case "/tasks":
        const tasks = mockData.tasks;
        const taskId = getParameterByName("id", req.url);
        res.writeHead(200, { "Content-Type": "application/json" });

        if (taskId) {
          return res.end(
            JSON.stringify(tasks.find((task) => task.id === taskId))
          );
        }
        return res.end(JSON.stringify(tasks));
      case "/image":
        return serveStaticFile(res, "/images/demo.jpeg", "image/jpeg");
      default:
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end("Hello world");
    }
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function getParameterByName(name, url) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function serveStaticFile(res, path, contentType, responseCode) {
  if (!responseCode) responseCode = 200;

  fs.readFile(__dirname + path, function (err, data) {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      return res.end("500 - Internal Error");
    } else {
      res.writeHead(responseCode, { "Content-Type": contentType });
      return res.end(data);
    }
  });
}
