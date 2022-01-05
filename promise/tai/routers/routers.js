const tasksController = require("../controller/tasksController.js");
const usersController = require("../controller/usersController.js");


/* ======== TASKS ROUTER ======== */
const tasksRouter = {
    GET: {
        '/tasks': tasksController.getTasks,
    },
    POST: {
        '/tasks': tasksController.addTask,
    },
    PUT: {
        '/tasks': tasksController.editTask,
    },
    DELETE: {
        '/tasks': tasksController.deleteTask,
    },
};
/* ======== IMAGE ROUTER ======== */
const usersRouter = {
    
};  

const routers = {
    "/tasks": tasksRouter,
    "/users": usersRouter,
    "/error": errorNotify
};

function errorNotify(response){
    response.end("error");
}


module.exports = routers;