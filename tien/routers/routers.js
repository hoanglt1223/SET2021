const tasksController = require("../controller/tasks");
const imageController = require("../controller/image");

/* ======== TASKS ROUTER ======== */
const tasksRouter = {
    GET: {
        '/tasks': tasksController.getTasks,
    },
    POST: {
        '/tasks': tasksController.postTasks,
    },
    PUT: {
        '/tasks': tasksController.putTasks,
    },
    DELETE: {
        '/tasks': tasksController.deleteTasks,
    },
    PATCH: {
        '/tasks': tasksController.patchTasks,
    }
};
/* ======== IMAGE ROUTER ======== */
const imageRouter = {
    GET: {
        '/image': imageController.getImage,
    }
};

/* ======== ROUTERS ======== */
const routers = {
    tasks: tasksRouter,
    image: imageRouter
};

module.exports = routers;