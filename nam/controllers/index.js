const url = require('url')
const { insertUser, validateUser, handleAuthResponse, findUsers, updateUser, findUserByID, verifyUser } = require('./users.helpers')
const { handleError } = require('../helpers')

function handleNotFound(req, res) {
    const parsedUrl = url.parse(req.url, true)
    res.statusCode = 404
    res.end(`Route ${parsedUrl.pathname} not found.`)
}

function signUp(request, response) {
    debugger;
    const user = verifyUser(request.body);

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
    validateUser(user)
        .then(foundUser => {
            if (foundUser && foundUser.length > 0) {
                response.statusCode = 200
                response.end(JSON.stringify(foundUser));
            }
            else {
                response.statusCode = 404;
                handleAuthResponse(response, false);
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

function findOneUser(request, response) {
    response.setHeader('Content-Type', 'application/json');
    const user = request.body;
    findUsers(user)
        .then(foundUser => {
            if (foundUser && foundUser.length > 0) {
                let info = {
                    username: foundUser[0].username,
                    tasks: foundUser[0].tasks
                }
                response.statusCode = 200
                response.end(JSON.stringify(info));
            }
            else {
                throw new Error('Unknown user');
            }
        }).catch(error => {
            handleError(error, 'controllers/helpers.users.js', 'findOneUser');
            handleAuthResponse(response, false);
        })

}

function updateUserByID(request, response) {
    const user = request.body;
    const userID = user._id;
    updateUser(userID, user).then(() => {
        handleAuthResponse(response, true)
    }).catch(error => {
        handleError(error, 'controllers/helpers.users.js', 'updateUserByID');
        handleAuthResponse(response, false);
    })
}

function addTasks(request, response) {
    let user = request.body;
    const userID = user._id;
    const newTasks = user.tasks;
    findUserByID(userID).then(foundUser => {
        let oldTasks = foundUser.tasks;
        newTasks.forEach(task => {
            oldTasks.push(task);
        })
        user.tasks = oldTasks;
    }).then(() => {
        updateUser(userID, user).then(() => {
            handleAuthResponse(response, true);
        }).catch(error => {
            handleError(error, 'controllers/helpers.users.js', 'addTasks');
            handleAuthResponse(response, false);
        })
    })
}


function deleteUserByID(request, response) {
    let user = request.body;
    const userID = user._id;
    findUserByID(userID).then(foundUser => {
        debugger;
        if (foundUser) {
            foundUser.isDeleted = true;
            updateUser(userID, foundUser).then(() => {
                handleAuthResponse(response, true);
            })
        }
        else {
            handleAuthResponse(response, false)
        }
    }).catch(error => {
        handleError(error, 'controllers/helpers.users.js', 'deleteUserByID');
        handleAuthResponse(response, false);
    })
}

module.exports = {
    handleNotFound,
    signUp,
    signIn,
    pingWithAuth,
    findAllUsers,
    findOneUser,
    updateUserByID,
    addTasks,
    deleteUserByID
}
