const url = require('url')
const { handleNotFound, getTasks, getTask, addTask, editTask, deleteTask, signUp, signIn, getUsers, getUser, deleteUser, editUser, pingWithAuth } = require('./controllers')
const { authenticate, parseRequestBody } = require('./middlewares')
const { handleError } = require('./helpers')
const { updateTask } = require('./controllers/helpers')

const routes = {
    '/sign-up': { 'POST': { 
        controller: signUp,
        middlewares: [parseRequestBody] }
    },
    '/sign-in': { 'POST': { 
        controller: signIn }
    },
    '/add-task': { 'POST': { 
        controller: addTask,
        middlewares: [parseRequestBody] }
    },
    '/update-task': { 'POST':
    { 
        controller: editTask,
        middlewares: [parseRequestBody] }
    },
    '/delete-task': { 'POST':{ 
        controller: deleteTask,
        middlewares: [parseRequestBody] }
    },
    '/get-tasks': { 'GET': { controller: getTasks } },
    '/get-task': { 'POST': { 
        controller: getTask,
        
        middlewares: [parseRequestBody] }
    }, // lag
    '/get-users': {'GET': {controller: getUsers}},
    '/get-user': { 'POST': { 
        controller: getUser,
        middlewares: [parseRequestBody] }
    },
    '/delete-user' : {'POST': { 
        controller: deleteUser,
        middlewares: [parseRequestBody] }
    },
    '/update-user' : {'POST' : { 
        controller: editUser,
        middlewares: [parseRequestBody] }
    },
    '/ping-with-auth': {
        'GET': {
            controller: pingWithAuth,
            middlewares: [authenticate]
        }
    }
}

function route(req) {
    const parsedUrl = url.parse(req.url, true)
    if (routes[parsedUrl.pathname] && routes[parsedUrl.pathname][req.method]) {
        const currentRouteData = routes[parsedUrl.pathname][req.method]
        if (currentRouteData.middlewares && currentRouteData.middlewares.length > 0) {
            return function controller(req, res) {
                try {
                    let promise = currentRouteData.middlewares[0](req, res)
                    currentRouteData.middlewares.forEach((middleware, index) => {
                            if (index > 0) {
                                promise.then(() => middleware(req, res))
                            }
                        })
                        // Call controller after all interceptor (middlewares)
                    promise.then(() => currentRouteData.controller(req, res))
                    return promise
                } catch (error) {
                    handleError(error, 'router.js', 'route() -> controller()')
                    res.statusCode = 500
                    res.end()
                }
            }
        }

        return currentRouteData.controller
    }

    return handleNotFound
}

module.exports = { route }