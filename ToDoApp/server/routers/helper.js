
const {parseRequestBody} = require('../middlewares/')
const {createProject, getProjects} = require('../controllers')

const Router = {
    'GET' :{
        '/projects':{
            middlewares : [parseRequestBody],
            controller: getProjects,
        }
    },

    'POST' : {
        '/add-project' : {
            middlewares : [parseRequestBody],
            controller: createProject,
        }
    },


    'DELETE':{

    },

    'PUT' : {

    },

    'PATH' : {

    }
}

module.exports = Router