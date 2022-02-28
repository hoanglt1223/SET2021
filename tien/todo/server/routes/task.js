const taskController = require("../controller/task");
const { parseRequestBody } = require("../middlewares");

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
      middlewares: [parseRequestBody],
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
      middlewares: [parseRequestBody],
    },
  },
  PATCH: {
    "/tasks": {
      controller: taskController.updateTask,
      middlewares: [parseRequestBody],
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
