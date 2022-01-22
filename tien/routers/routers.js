/* ======== ROUTERS ======== */
const tasksController = require("../controller/tasksController");
const imageController = require("../controller/imageController");

const routers = {
    tasks: tasksRouter,
    image: imageRouter
};
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

module.exports = routers;