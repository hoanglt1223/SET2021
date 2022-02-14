const {addProject, verifyProject, findProjects} = require('./projects.helpers')
const { insertUser, findUsers, findUserById, removeUser, updateUser, verifyUser } = require('./user.helpers')

const {handleError} = require('../helper');
const { Project } = require('../models');
const { User } = require('../models');

function handleAuthResponse(response, isSuccessful = false) {
    const data = {
        status: isSuccessful ? 'success' : 'fail'
    }
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(data));
}


function handleDataResponse(response, data){
    response.statusCode = 200;
    response.end(JSON.stringify(data));
}

function createProject(request, response){
    const project = verifyProject(request.body);
    addProject(project)
    .then(() => {
        handleAuthResponse(response, true);
    })
    .catch(err => {
        handleError(err, 'controllers/index.js', 'createProject')
        handleAuthResponse(response, false);
    })
}

function getProjects(request, response){
    let project = verifyProject(request.body);
    if (project.projectName === undefined) project = {};
    findProjects(project)
    .then(foundProjects => {
        if (!foundProjects) {
            throw new Error('Unknow Projects')
        }
        else {
            handleDataResponse(response, foundProjects);
        }
    })
    .catch ((error) => {
        handleError(error, '../controllers/index.js', 'getProjects');
        handleAuthResponse(response, false);
    })
}


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


function getUsers(request, response){
    response.setHeader('Content-Type', 'application/json');
    findUsers()
    .then(foundUsers => {
        if (!foundUsers) {
            throw new Error('Unknow Users')
        }
        else {
            handleDataResponse(response, foundUsers);
        }
    })
    .catch ((error) => {
        handleError(error, '../controllers/index.js', 'getUsers');
        handleAuthResponse(response, false);
    })
}

function getUser(request, response) {
    const id = request.body;
    response.setHeader('Content-Type', 'application/json');
    findUserById(id)
        // .then((data) => {
        //     response.end(JSON.stringify(data))
        // })
        .then(foundUser => {
            if (!foundUser) {
                throw new Error('Unknow User')
            }
            else {
                handleDataResponse(response, foundUser);
            }
        })
        .catch ((error) => {
            handleError(error, '../controllers/index.js', 'getUsers');
            handleAuthResponse(response, false);
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



module.exports = {createProject, getProjects, signUp, getUsers, getUser, deleteUser, editUser}