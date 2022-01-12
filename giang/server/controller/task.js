const mongoose = require("mongoose");

const { getParameterByName } = require("../utils");
const getBodyData = require("../middlewares/getBodyData");
const { Task } = require("../model");
const { TaskStatus, DEFAULT_TASK } = require("../constants");

const taskController = {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
  replaceAndUpdateTask,
};

async function getTasks(req, res) {
  const tasks = await Task.find();
  const taskId = getParameterByName("id", req.url);

  res.writeHead(200, { "Content-Type": "application/json" });

  if (taskId) {
    const taskObjectId = mongoose.Types.ObjectId(taskId);
    const currentTask = await Task.findById(taskObjectId);
    return res.end(JSON.stringify(currentTask));
  }
  return res.end(JSON.stringify(tasks));
}

async function deleteTask(req, res) {
  const taskId = getParameterByName("id", req.url);
  const taskObjectId = mongoose.Types.ObjectId(taskId);

  if (taskId) {
    await Task.deleteOne({
      _id: taskObjectId,
    });

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end("Delete task success");
  }
}

function createTask(req, res) {
  getBodyData(req, async (newTask) => {
    await Task.create({ ...newTask, status: TaskStatus.DOING });
    const tasks = await Task.find();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(tasks));
  });
}

function updateTask(req, res) {
  const taskId = getParameterByName("id", req.url);
  const taskObjectId = mongoose.Types.ObjectId(taskId);

  if (taskId) {
    getBodyData(req, async (taskBody) => {
      await Task.updateOne(
        {
          _id: taskObjectId,
        },
        taskBody
      );

      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end("Update task success");
    });
  }
}

function replaceAndUpdateTask(req, res) {
  const taskId = getParameterByName("id", req.url);
  const taskObjectId = mongoose.Types.ObjectId(taskId);

  if (taskId) {
    getBodyData(req, async (taskBody) => {
      const newTask = { ...DEFAULT_TASK, ...taskBody };
      await Task.updateOne(
        {
          _id: taskObjectId,
        },
        newTask
      );

      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end("Update task success");
    });
  }
}

module.exports = taskController;
