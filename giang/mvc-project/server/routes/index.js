const taskRouter = require("./task.route");
const imageRouter = require("./image.route");
const userRouter = require("./user.route");
const authRouter = require("./auth.route");

const routes = {
  task: taskRouter,
  image: imageRouter,
  user: userRouter,
  auth: authRouter,
};

module.exports = routes;
