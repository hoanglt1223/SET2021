const {taskController} = require('../controllers/index');
const Router = require("./router");

const TaskRouter = function () {
    this.GET = {
        '/tasks': taskController.getAllTasks,
        '/tasks/{id}': taskController.getTaskById,
    };
    this.POST = {
        '/tasks': taskController.addTask
    };
    this.DELETE = {
        '/tasks/{id}': taskController.deleteTaskById
    };
    this.PATCH = {
        '/tasks/{id}': taskController.updateTaskById
    };
    Router.call(this);
}

const taskRouter = new TaskRouter();

module.exports = taskRouter;