
const { parseRequestBody } = require('../middlewares/')
const { createProject, getProjects, deleteProject } = require('../controllers')

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

    'PATH': {

    }
}

module.exports = Router