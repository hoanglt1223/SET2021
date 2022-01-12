
const { handleNotFound, signUp, signIn, pingWithAuth, findAllUsers, findOneUser, updateUserByID, addTasks, deleteUserByID } = require('../controllers')
const { authenticate, parseRequestBody } = require('../middlewares')


const routes = {
    'POST': {
        '/sign-up': {
            controller: signUp,
            middlewares: [parseRequestBody]
        },
        '/sign-in': {
            controller: signIn,
            middlewares: [parseRequestBody]
        },
        
        '/find-user': {
            controller: findOneUser,
            middlewares: [parseRequestBody]
        },
    },
    'GET': {
        '/ping-with-auth': {
            controller: pingWithAuth,
            middlewares: [parseRequestBody]
        },
        '/find-all-users': {
            controller: findAllUsers,
            middlewares: [parseRequestBody]
        },
    },

    'PUT':{
        '/update-user':{
            controller: updateUserByID,
            middlewares:[parseRequestBody]
        },
        
    },

    'PATCH':{
        '/add-tasks':{
            controller: addTasks,
            middlewares :[parseRequestBody],
        }
    },

    'DELETE':{
        '/delete':{
            controller: deleteUserByID,
            middlewares:[parseRequestBody]
        }
    },

    'FAIL':{
        handleFail: handleNotFound
    }
}

module.exports = routes