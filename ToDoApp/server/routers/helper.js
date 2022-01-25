
const {parseRequestBody} = require('../middlewares/')
const {createProject} = require('../controllers')

const Router = {
    'GET' :{
        '/projects':{
            middlewares : [parseRequestBody]
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