const BaseController = require("./baseController");
const TaskController = require("./taskController");
const ImageController = require("./imageController");

const baseController = new BaseController();
const taskController = new TaskController();
const imageController = new ImageController();

module.exports = {baseController, taskController, imageController}
