const taskController = require("../controller/task");

const taskRouter = {
  GET: {
    "/tasks": taskController.getTasks,
  },
  POST: {
    "/tasks": taskController.createTask,
  },
  DELETE: {
    "/tasks": taskController.deleteTask,
  },
  PUT: {
    "/tasks": taskController.replaceAndUpdateTask,
  },
  PATCH: {
    "/tasks": taskController.updateTask,
  },
};

module.exports = taskRouter;
