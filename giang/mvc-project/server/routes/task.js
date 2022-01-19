const taskController = require("../controller/task");
const { getBodyData } = require("../middlewares");

const taskRouter = {
  GET: {
    "/tasks": {
      controller: taskController.getTasks,
      middlewares: [],
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
      controller: () => {},
      middlewares: [],
    },
  },
};

module.exports = taskRouter;
