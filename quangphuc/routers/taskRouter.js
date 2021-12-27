const taskController = require('../controllers/taskController');
const {Router} = require("./index");
const TaskRouter = function () {
    const GET = {
        '/tasks': taskController.getAllTasks,
        '/tasks/{id}': taskController.getTaskById,
    };
    const POST = {
        '/tasks': taskController.addTask
    };
    const DELETE = {
        '/tasks/{id}': taskController.deleteTaskById
    };
    const PATCH = {
        '/tasks/{id}': taskController.updateTaskById
    };
    Router.call(this, GET, POST, DELETE, PATCH);
    this.print = () => {
        console.log('haha');
    }
}
const taskRouter = new TaskRouter();
module.exports = taskRouter;