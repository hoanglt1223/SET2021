const taskRouter = require("./task");
const imageRouter = require("./image");

const routes = {
  task: taskRouter,
  image: imageRouter,
};

module.exports = routes;
