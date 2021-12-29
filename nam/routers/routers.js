/* ======== ROUTERS ======== */
const tasksController = require("../controller/tasksController");
const imageController = require("../controller/imageController");


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

const routers = {
    tasks: tasksRouter,
    image: imageRouter
};
module.exports = routers;