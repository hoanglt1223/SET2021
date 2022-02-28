const taskRouter = require("./task");
const userRouter = require("./user");

const routes = {
  task: taskRouter,
  user: userRouter,
};

module.exports = routes;
