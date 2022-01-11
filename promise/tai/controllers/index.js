const url = require('url')
const jwt = require('jsonwebtoken')
const { insertUser, verifyUser, handleAuthResponse, findTask, findUser, insertTask, updateTask, removeTask } = require('./helpers')
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
            findTask()
                .then(data => {
                    response.end(JSON.stringify(data))
                })
                .catch(err => {
                    handleError(err, 'controllers/index.js', 'getTasks')
                    handleAuthResponse(response, false)
                })

        })
}

function editTask(request, response) {
    const chunks = []
    request
        .on('data', (chunk) => {
            chunks.push(chunk)
        })
        .on('end', () => {
            const task = JSON.parse(chunks.length > 0 ? chunks : '{}')
            updateTask(task)
                .then(() => {
                    handleAuthResponse(response, true)
                })
                .catch(err => {
                    handleError(err, 'controllers/index.js', 'editTask')
                    handleAuthResponse(response, false)
                })
        })
}

function deleteTask(request, response) {
    const chunks = []
    request
        .on('data', (chunk) => {
            chunks.push(chunk)
        })
        .on('end', () => {
            const task = JSON.parse(chunks.length > 0 ? chunks : '{}')
            removeTask(task)
                .then(() => {
                    handleAuthResponse(response, true)
                })
                .catch(err => {
                    handleError(err, 'controllers/index.js', 'deleteTask')
                    handleAuthResponse(response, false)
                })
        })
}

function addTask(request, response) {
    const chunks = []
    request
        .on('data', (chunk) => {
            chunks.push(chunk)
        })
        .on('end', () => {
            const task = JSON.parse(chunks.length > 0 ? chunks : '{}')
            insertTask(task)
                .then(() => {
                    handleAuthResponse(response, true)
                })
                .catch(err => {
                    handleError(err, 'controllers/index.js', 'addTask')
                    handleAuthResponse(response, false)
                })
        })
}

function signUp(request, response) {
    const chunks = []
    request
        .on('data', (chunk) => {
            chunks.push(chunk)
        })
        .on('end', () => {
            const user = JSON.parse(chunks.length > 0 ? chunks : '{}')
            insertUser(user)
                .then(() => {
                    handleAuthResponse(response, true)
                })
                .catch(err => {
                    handleError(err, 'controllers/index.js', 'signUp')
                    handleAuthResponse(response, false)
                })
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
            findUser()
                .then(data => {
                    response.end(JSON.stringify(data))
                })
                .catch(err => {
                    handleError(err, 'controllers/index.js', 'getUsers')
                    handleAuthResponse(response, false)
                })

        })
}

function pingWithAuth(req, res) {
    res.end('Success')
}

module.exports = {
    handleNotFound,
    getTasks,
    addTask,
    editTask,
    deleteTask,
    signUp,
    signIn,
    getUsers,
    pingWithAuth
}