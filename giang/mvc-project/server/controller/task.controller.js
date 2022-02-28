const mongoose = require("mongoose");

const { getParameterByName } = require("../utils");
const { Task } = require("../model");
const { TaskStatus, DEFAULT_TASK } = require("../constants");
const { task } = require("../routes");
const errorHandler = require("../helper/errorHandler");

const taskController = {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
  replaceAndUpdateTask,
};

async function getTasks(req, res) {
  let tasks = [];
  const filter = JSON.parse(getParameterByName("filter", req.url));

  if (filter?.where?.creatorId) {
    tasks = await Task.find({ creatorId: filter?.where?.creatorId });
  } else {
    tasks = await Task.find();
  }

  const taskId = getParameterByName("id", req.url);

  if (filter?.where?.creatorId)
    if (taskId) {
      const taskObjectId = mongoose.Types.ObjectId(taskId);
      const currentTask = await Task.findById(taskObjectId);
      res.end(JSON.stringify(currentTask));
    }
  res.end(JSON.stringify(tasks));
}

async function deleteTask(req, res) {
  const taskId = getParameterByName("id", req.url);
  const taskObjectId = mongoose.Types.ObjectId(taskId);

  if (taskId) {
    await Task.deleteOne({
      _id: taskObjectId,
    });

    res.end("Delete task success");
  }
}

async function createTask(req, res) {
  const newTask = req.body;
  await Task.create({ ...newTask, status: TaskStatus.DOING });
  const tasks = await Task.find();

  res.end(JSON.stringify(tasks));
}

async function updateTask(req, res) {
  const taskId = getParameterByName("id", req.url);
  const taskObjectId = mongoose.Types.ObjectId(taskId);

  if (taskId) {
    const taskBody = req.body;

    if (taskBody.title.includes("toilet")) {
      errorHandler(res, `${taskId}: Task title invalid`);
      return;
    }

    await Task.updateOne(
      {
        _id: taskObjectId,
      },
      taskBody
    );

    res.end("Update task success");
  }
}

async function replaceAndUpdateTask(req, res) {
  const taskId = getParameterByName("id", req.url);
  const taskObjectId = mongoose.Types.ObjectId(taskId);

  if (taskId) {
    const taskBody = req.body;
    const newTask = { ...DEFAULT_TASK, ...taskBody };
    await Task.updateOne(
      {
        _id: taskObjectId,
      },
      newTask
    );

    res.end("Update task success");
  }
}

module.exports = taskController;
