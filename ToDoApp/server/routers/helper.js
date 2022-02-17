
const { parseRequestBody } = require('../middlewares/')
const { createProject, getProjects, deleteProject, updateProjectAddTaskByID, updateProjectDoneTaskByID, updateProjectDeleteTaskByID } = require('../controllers')

const Router = {
    'GET': {
        '/projects': {
            middlewares: [parseRequestBody],
            controller: getProjects,
        }
    },

    'POST': {
        '/add-project': {
            middlewares: [parseRequestBody],
            controller: createProject,
        }

    },

    'DELETE': {
        '/delete-project': {
            middlewares: [parseRequestBody],
            controller: deleteProject,

        }
    },

    'PUT': {


    },

    'PATCH': {
        '/add-task': {
            middlewares: [parseRequestBody],
            controller: updateProjectAddTaskByID
        },
        '/done-task':{
            middlewares: [parseRequestBody],
            controller: updateProjectDoneTaskByID,
        },
        '/delete-task':{
            middlewares: [parseRequestBody],
            controller: updateProjectDeleteTaskByID
        }

    }
}

module.exports = Router