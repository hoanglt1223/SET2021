const { v4: uuidv4 } = require("uuid");
const { getParameterByName } = require("../utils");
const taskRepository = require("../repository/task");
const jsonDB = require("../service/jsonDB");

const taskController = {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
  replaceAndUpdateTask,
};

function getTasks(req, res) {
  const tasks = jsonDB.getTasksData();
  const taskId = getParameterByName("id", req.url);
  res.writeHead(200, { "Content-Type": "application/json" });
  if (taskId) {
    return res.end(JSON.stringify(tasks.find((task) => task.id === taskId)));
  }
  return res.end(JSON.stringify(tasks));
}

function deleteTask(req, res) {
  const tasks = jsonDB.getTasksData();
  const taskId = getParameterByName("id", req.url);
  if (taskId) {
    const filterTasks = tasks.filter((task) => task.id !== taskId);
    jsonDB.updateTasksData(filterTasks);

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end("Delete task success");
  }
}

function createTask(req, res) {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString(); // convert Buffer to string
  });

  req.on("end", () => {
    const newTask = JSON.parse(body);
    const updatedTasks = taskRepository.create({ id: uuidv4(), ...newTask });

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(updatedTasks));
  });
}

function updateTask(req, res) {
  const tasks = jsonDB.getTasksData();
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

      jsonDB.updateTasksData(newTasks);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newTasks));
    });
  }
}

function replaceAndUpdateTask(req, res) {
  const tasks = jsonDB.getTasksData();
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

      jsonDB.updateTasksData(newTasks);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newTasks));
    });
  }
}

module.exports = taskController;
