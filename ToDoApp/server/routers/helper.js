
const {parseRequestBody} = require('../middlewares/')
const {createProject, getProjects, signUp, getUsers, getUser, deleteUser, editUser} = require('../controllers')

const Router = {
    'GET' :{
        '/projects':{
            middlewares : [parseRequestBody],
            controller: getProjects,
        },
        '/get-users':{
            middlewares : [parseRequestBody],
            controller: getUsers,
        },
        '/get-user':{
            middlewares : [parseRequestBody],
            controller: getUser,
        },
    },

    'POST' : {
        '/add-project' : {
            middlewares : [parseRequestBody],
            controller: createProject,
        },
        '/sign-up' : {
            middlewares : [parseRequestBody],
            controller: signUp,
        },
        '/delete-user':{
            middlewares : [parseRequestBody],
            controller: deleteUser,
        },
        '/edit-user':{
            middlewares : [parseRequestBody],
            controller: editUser,
        }
        // '/sign-in' : {
        //     middlewares : [parseRequestBody],
        //     controller: signIn,
        // }
    },


    'DELETE':{

    },

    'PUT' : {

    },

    'PATH' : {

    }
}

module.exports = Router