const { v4: uuidv4 } = require("uuid");
const { getParameterByName } = require("../utils");
const TaskRepository = require("../repository/task");
const getBodyData = require("../middlewares/getBodyData");

const taskRepository = new TaskRepository();
const taskController = {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
  replaceAndUpdateTask,
};

function getTasks(req, res) {
  const tasks = taskRepository.findAll();
  const taskId = getParameterByName("id", req.url);

  res.writeHead(200, { "Content-Type": "application/json" });

  if (taskId) {
    return res.end(JSON.stringify(taskRepository.findOne(taskId)));
  }
  return res.end(JSON.stringify(tasks));
}

function deleteTask(req, res) {
  const taskId = getParameterByName("id", req.url);
  if (taskId) {
    taskRepository.delete(taskId);

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end("Delete task success");
  }
}

function createTask(req, res) {
  getBodyData(req, (newTask) => {
    const updatedTasks = taskRepository.create({ id: uuidv4(), ...newTask });

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(updatedTasks));
  });
}

function updateTask(req, res) {
  const taskId = getParameterByName("id", req.url);

  if (taskId) {
    getBodyData(req, (taskBody) => {
      const newTasks = taskRepository.update(taskId, taskBody);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newTasks));
    });
  }
}

function replaceAndUpdateTask(req, res) {
  const taskId = getParameterByName("id", req.url);

  if (taskId) {
    getBodyData(req, (taskBody) => {
      const newTasks = taskRepository.replaceAndUpdate(taskId, taskBody);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newTasks));
    });
  }
}

module.exports = taskController;
