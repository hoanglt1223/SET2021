const taskController = require("../controller/task.controller");
const { getBodyData, saveUser, authen } = require("../middlewares");

const taskRouter = {
  GET: {
    "/tasks": {
      controller: taskController.getTasks,
      middlewares: [saveUser, authen],
    },
  },
  POST: {
    "/tasks": {
      controller: taskController.createTask,
      middlewares: [getBodyData],
    },
  },
  DELETE: {
    "/tasks": {
      controller: taskController.deleteTask,
      middlewares: [],
    },
  },
  PUT: {
    "/tasks": {
      controller: taskController.replaceAndUpdateTask,
      middlewares: [getBodyData],
    },
  },
  PATCH: {
    "/tasks": {
      controller: taskController.updateTask,
      middlewares: [getBodyData],
    },
  },
  OPTIONS: {
    "/tasks": {
      controller: (_, res) => {
        res.end();
      },
      middlewares: [],
    },
  },
};

module.exports = taskRouter;
