const url = require('url')
const jwt = require('jsonwebtoken')
const { insertUser, verifyUser, removeUser, updateUser, handleAuthResponse, findTasks, findTaskById, findUsers, findUserById, insertTask, updateTask, removeTask } = require('./helpers')
const { handleError } = require('../helpers')

function handleNotFound(req, res) {
    const parsedUrl = url.parse(req.url, true)
    res.statusCode = 404
    res.end(`Route ${parsedUrl.pathname} not found.`)
}

function getTasks(request, response) {
    const chunks = []
    request
        .on('data', (chunk) => {
            chunks.push(chunk)
        })
        .on('end', () => {
    
            response.setHeader('Content-Type', 'application/json');
            findTasks()
                .then(data => {
                    response.end(JSON.stringify(data))
                })
                .catch(err => {
                    handleError(err, 'controllers/index.js', 'getTasks')
                    handleAuthResponse(response, false)
                })

        })
}

function getTask(request, response) {
    const id = request.body;
    response.setHeader('Content-Type', 'application/json');
    findTaskById(id._id)
        .then((data) => {
            response.end(JSON.stringify(data))
        })
        .catch(err => {
            handleError(err, 'controllers/index.js', 'getTask')
            handleAuthResponse(response, false)
        })
        

}

function editTask(request, response) {
    const task = request.body;
    updateTask(task._id, task)
        .then(() => {
            handleAuthResponse(response, true)
        })
        .catch(err => {
            handleError(err, 'controllers/index.js', 'editTask')
            handleAuthResponse(response, false)
        })
}

function deleteTask(request, response) {
    const task = request.body;
    removeTask(task._id)
        .then(() => {
            handleAuthResponse(response, true)
        })
        .catch(err => {
            handleError(err, 'controllers/index.js', 'deleteTask')
            handleAuthResponse(response, false)
        })
}

function addTask(request, response) {
    const task = request.body;
    insertTask(task)
        .then(() => {
            handleAuthResponse(response, true)
        })
        .catch(err => {
            handleError(err, 'controllers/index.js', 'addTask')
            handleAuthResponse(response, false)
        })
}

/////////////////////////////USER/////////////////////

function signUp(request, response) {
    const user = request.body;
    insertUser(user)
        .then(() => {
            handleAuthResponse(response, true)
        })
        .catch(err => {
            handleError(err, 'controllers/index.js', 'signUp')
            handleAuthResponse(response, false)
        })
}

function signIn(request, response) {
    const chunks = []
    request
        .on('data', (chunk) => {
            chunks.push(chunk)
        })
        .on('end', () => {
            const user = JSON.parse(chunks.toString())
            response.setHeader('Content-Type', 'application/json');
            verifyUser(user).then(foundUser => {
                if (!foundUser) {
                    throw new Error('User not found')
                }
                const token = jwt.sign({ userId: foundUser.id },
                    'RANDOM_TOKEN_SECRET', { expiresIn: '24h' }
                )
                const data = {
                    token
                }
                response.end(JSON.stringify(data));
            }).catch(err => {
                handleError(err, 'controllers/index.js', 'signIn')
                response.statusCode = 404
                response.end('Username or password is not correct.')
            })
        })
}

function getUsers(request, response) {
    const chunks = []
    request
        .on('data', (chunk) => {
            chunks.push(chunk)
        })
        .on('end', () => {
    
            response.setHeader('Content-Type', 'application/json');
            findUsers()
                .then(data => {
                    response.end(JSON.stringify(data))
                })
                .catch(err => {
                    handleError(err, 'controllers/index.js', 'getUsers')
                    handleAuthResponse(response, false)
                })

        })
}

function getUser(request, response) {
    const id = request.body;
    response.setHeader('Content-Type', 'application/json');
    findUserById(id)
        .then((data) => {
            response.end(JSON.stringify(data))
        })
        .catch(err => {
            handleError(err, 'controllers/index.js', 'getTask')
            handleAuthResponse(response, false)
        })
}

function deleteUser(request, response) {
    const user = request.body;
    removeUser(user._id)
        .then(() => {
            handleAuthResponse(response, true)
        })
        .catch(err => {
            handleError(err, 'controllers/index.js', 'deleteUser')
            handleAuthResponse(response, false)
        })
}

function editUser(request, response) {
    const user = request.body;
    updateUser(user._id, user)
        .then(() => {
            handleAuthResponse(response, true)
        })
        .catch(err => {
            handleError(err, 'controllers/index.js', 'editUser')
            handleAuthResponse(response, false)
        })
}

function pingWithAuth(req, res) {
    res.end('Success')
}

module.exports = {
    handleNotFound,
    getTasks,
    getTask,
    addTask,
    editTask,
    deleteTask,
    signUp,
    signIn,
    getUsers,
    getUser,
    deleteUser,
    editUser,
    pingWithAuth
}