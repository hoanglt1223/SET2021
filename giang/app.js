const http = require("http");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const hostname = "127.0.0.1";
const port = 3003;
const DATA_FILE_PATH = "./mock-data.json";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  switch (req.method) {
    case "GET":
      return handleGETMethods(req, res);
    case "DELETE":
      return handleDELETEMethods(req, res);
    case "POST":
      return handlePOSTMethods(req, res);
    case "PATCH":
      return handlePATCHMethods(req, res);
    case "PUT":
      return handlePUTMethods(req, res);
    default:
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function handleGETMethods(req, res) {
  const routeUrl = req.url.split("?")[0];

  if (routeUrl === "/tasks") {
    const tasks = getTasksData();
    const taskId = getParameterByName("id", req.url);
    res.writeHead(200, { "Content-Type": "application/json" });
    if (taskId) {
      return res.end(JSON.stringify(tasks.find((task) => task.id === taskId)));
    }
    return res.end(JSON.stringify(tasks));
  }

  if (routeUrl === "/image") {
    return serveStaticFile(res, "/images/demo.jpeg", "image/jpeg");
  }
}

function handleDELETEMethods(req, res) {
  const routeUrl = req.url.split("?")[0];

  if (routeUrl === "/tasks") {
    const tasks = getTasksData();
    const taskId = getParameterByName("id", req.url);
    if (taskId) {
      const filterTasks = tasks.filter((task) => task.id !== taskId);
      updateTasksData(filterTasks);

      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end("Delete task success");
    }
  }
}

function handlePOSTMethods(req, res) {
  const routeUrl = req.url.split("?")[0];

  if (routeUrl === "/tasks") {
    const tasks = getTasksData();
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString(); // convert Buffer to string
    });

    req.on("end", () => {
      const newTask = JSON.parse(body);
      const newTasks = [
        ...tasks,
        { id: uuidv4(), ...newTask, isDeleted: false },
      ];
      updateTasksData(newTasks);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newTasks));
    });
  }
}

function handlePATCHMethods(req, res) {
  const routeUrl = req.url.split("?")[0];

  if (routeUrl === "/tasks") {
    const tasks = getTasksData();
    const taskId = getParameterByName("id", req.url);

    if (taskId) {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString(); // convert Buffer to string
      });

      req.on("end", () => {
        const taskBody = JSON.parse(body);
        const newTasks = tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, ...taskBody };
          }

          return task;
        });

        updateTasksData(newTasks);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(newTasks));
      });
    }
  }
}

function handlePUTMethods(req, res) {
  const routeUrl = req.url.split("?")[0];

  if (routeUrl === "/tasks") {
    const tasks = getTasksData();
    const taskId = getParameterByName("id", req.url);

    if (taskId) {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString(); // convert Buffer to string
      });

      req.on("end", () => {
        const taskBody = JSON.parse(body);
        const newTasks = tasks.map((task) => {
          if (task.id === taskId) {
            return {
              id: task.id,
              title: null,
              status: null,
              isAdminCreated: null,
              isDeleted: null,
              ...taskBody,
            };
          }

          return task;
        });

        updateTasksData(newTasks);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(newTasks));
      });
    }
  }
}

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

function updateTasksData(tasks) {
  fs.writeFile(
    DATA_FILE_PATH,
    JSON.stringify({
      tasks,
    }),
    () => {
      console.log("Update data success");
    }
  );
}

function getTasksData() {
  const rawData = fs.readFileSync(DATA_FILE_PATH);
  let data = JSON.parse(rawData);
  return data.tasks;
}
