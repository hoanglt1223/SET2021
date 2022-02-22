
const { parseRequestBody } = require('../middlewares/')
const { createProject,
    getProjects,
    deleteProject, updateProjectAddTaskByID, updateProjectDoneTaskByID, updateProjectDeleteTaskByID, signUp, getUsers, getUser, deleteUser, editUser, LogIn } = require('../controllers')

const Router = {
    'GET': {
        '/projects': {
            middlewares: [parseRequestBody],
            controller: getProjects,
        },
        '/get-users': {
            middlewares: [parseRequestBody],
            controller: getUsers,
        },

     

    },

    'POST': {
        '/add-project': {
            middlewares: [parseRequestBody],
            controller: createProject,
        },
        '/sign-up': {
            middlewares: [parseRequestBody],
            controller: signUp,
        },
        '/get-user':{
            middlewares : [parseRequestBody],
            controller: getUser,
        },
        '/log-in': {
            middlewares: [parseRequestBody],
            controller: LogIn,
        },  
    },

    'DELETE': {
        '/delete-project': {
            middlewares: [parseRequestBody],
            controller: deleteProject,
        },
        '/delete-user': {
            middlewares: [parseRequestBody],
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
        '/done-task': {
            middlewares: [parseRequestBody],
            controller: updateProjectDoneTaskByID,
        },
        '/delete-task': {
            middlewares: [parseRequestBody],
            controller: updateProjectDeleteTaskByID
        },
        '/edit-user':{
            middlewares : [parseRequestBody],
            controller: editUser,
        },

    }
}

module.exports = Router