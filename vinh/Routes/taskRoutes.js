const taskController = require('../Controllers/taskControllers')
module.exports = class taskRoutes{
    [
        {
            method: "GET",
            path: "/task",
            handler: taskController.apiGetAllTask
        },
        {
            method: "POST",
            path: "/task",
            handler: taskController.apiCreateTask
        },
        {
            method: "GET",
            path: "/task/{id}",
            handler: taskController.apiGetTaskByid
        },
        {
            method: "GET",
            path: "/task/{id}/delete",
            handler: taskController.apiDeleteTaskById
        }
    ]
}