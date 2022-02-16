const mongoose = require("mongoose");

const { getParameterByName } = require("../utils");
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

    return res.end("Delete task success");
  }
}

async function createTask(req, res) {
  const newTask = req.body;
  await Task.create({ ...newTask, status: TaskStatus.DOING });
  const tasks = await Task.find();

  res.end(JSON.stringify(tasks));
}

async function updateTask(req, res) {
  console.log("run here");

  const taskId = getParameterByName("id", req.url);
  const taskObjectId = mongoose.Types.ObjectId(taskId);

  if (taskId) {
    const taskBody = req.body;
    await Task.updateOne(
      {
        _id: taskObjectId,
      },
      taskBody
    );

    return res.end("Update task success");
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

    return res.end("Update task success");
  }
}

module.exports = taskController;
