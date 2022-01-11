const url = require('url')
const jwt = require('jsonwebtoken')
const { insertUser, verifyUser, handleAuthResponse, findUsers } = require('./helpers.users')
const { handleError } = require('../helpers')
const { rejects } = require('assert')

function handleNotFound(req, res) {
    const parsedUrl = url.parse(req.url, true)
    res.statusCode = 404
    res.end(`Route ${parsedUrl.pathname} not found.`)
}

function signUp(request, response) {
    const user = request.body
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
    const user = request.body
    response.setHeader('Content-Type', 'application/json');
    verifyUser(user)
        .then(foundUser => {
            debugger;
            if (foundUser && foundUser.length > 0) {
                response.statusCode = 200
                response.end(JSON.stringify(foundUser));
            }
            else {
                throw new Error('Unknown user');
            }
        }).catch(error => {
            handleError(error, 'controllers/helpers.users.js', 'signIn');
            handleAuthResponse(response, false);
        })
}

function pingWithAuth(req, res) {
    res.end('Success')
}

function findAllUsers(req, res) {
    res.setHeader('Content-Type', 'application/json');
    findUsers()
        .then(data => {
            res.end(JSON.stringify(data))
        })
        .catch(error => {
            handleError(error, 'controllers/helpers.users.js', 'findAllUsers');
            handleAuthResponse(res, false)
        })
}


module.exports = {
    handleNotFound,
    signUp,
    signIn,
    pingWithAuth,
    findAllUsers,
}
