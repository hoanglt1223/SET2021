let { tasks } = require("../repositories/tasks.json");
const { getRequestBody, getPathAndQuery } = require("../utilities");

const TaskController = function () {
  this.getAllTasks = (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(tasks));
  };

  this.getTaskById = (req, res) => {
    const { path, query } = getPathAndQuery(req);
    const task = tasks.find((task) => task.id === path[1]);
    if (task) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(task));
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("Task not found");
    }
  };

  this.addTask = async (req, res) => {
    const body = await getRequestBody(req);
    const task = tasks.find((task) => task.id === body.id);
    if (task) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("Invalid request");
    } else {
      tasks.push(body);
      res.statusCode = 204;
      res.end();
    }
  };

  this.deleteTaskById = (req, res) => {
    const { path, query } = getPathAndQuery(req);
    const taskId = path[1];
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      tasks = tasks.filter((task) => task.id !== taskId);
      res.statusCode = 204;
      res.end();
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("Invalid request/Not successful");
    }
  };

  this.updateTaskById = async (req, res) => {
    const { path, query } = getPathAndQuery(req);
    const body = await getRequestBody(req);
    let task = tasks.find((task) => task.id === path[1]);
    if (task) {
      const index = tasks.findIndex((task) => task.id === path[1]);
      tasks[index] = { ...task, ...body };
      tasks.forEach((item) => {
        if (item.id === task.id) {
          item = task;
        }
      });
      res.statusCode = 204;
      res.end();
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("Invalid request");
    }
  };
};

module.exports = TaskController;
