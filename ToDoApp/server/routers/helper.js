
const { parseRequestBody } = require('../middlewares/')
const { createProject, getProjects, deleteProject, updateProjectAddTaskByID } = require('../controllers')

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
        }
    }
}

module.exports = Router