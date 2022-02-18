
const {parseRequestBody} = require('../middlewares/')
const {createProject, getProjects, deleteProject, updateProjectAddTaskByID , updateProjectDoneTaskByID, updateProjectDeleteTaskByID, signUp, getUsers, getUser, deleteUser, editUser, signIn} = require('../controllers')

const Router = {
    'GET': {
        '/projects': {
            middlewares: [parseRequestBody],
            controller: getProjects,
        },
        '/get-users':{
            middlewares : [parseRequestBody],
            controller: getUsers,
        },
        
    },

    'POST': {
        '/add-project': {
            middlewares: [parseRequestBody],
            controller: createProject,
        },
        '/sign-up' : {
            middlewares : [parseRequestBody],
            controller: signUp,
        },
        '/edit-user':{
            middlewares : [parseRequestBody],
            controller: editUser,
        },
        '/sign-in' : {
            middlewares : [parseRequestBody],
            controller: signIn,
        },
        '/get-user':{
            middlewares : [parseRequestBody],
            controller: getUser,
        },
    },

    'DELETE': {
        '/delete-project': {
            middlewares: [parseRequestBody],
            controller: deleteProject,
        },
        '/delete-user':{
            middlewares : [parseRequestBody],
            controller: deleteUser,
        },
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