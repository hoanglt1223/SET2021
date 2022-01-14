const crypto = require('crypto')
const mongoose = require('mongoose')
// const {
//     userRepository,
//     taskRepository
// } = require('../repositories')
const { userModel, taskModel } = require('../models')

function insertUser(user) {
    const password = user.password ? hashPassword(user.password) : undefined
    const newUser = {
        username: user.username,
        password
    }
    return userModel.create(newUser)
}

function findTasks() {
    return taskModel.find({});
}
// cai nao a
function findTaskById(id){
    return taskModel.findById(id);
}

function findUsers() {
    return userModel.find();
}

function findUserById(id){
    return userModel.find({_id: id});
}

function insertTask(task) {
    const newTask = {
        taskName: task.taskName,
        isDone: "false",
        owner: task.owner
    }
    return taskModel.create(newTask)
}

function updateTask(id, taskUpdate) {
    return taskModel.findByIdAndUpdate(id, taskUpdate)
}

function removeTask(id) {
    return taskModel.findByIdAndRemove(id)    
}

function removeUser(id) {
    return userModel.findByIdAndRemove(id)
}

function updateUser(id, userUpdate) {
    return taskModel.findByIdAndUpdate(id, userUpdate)
}

function hashPassword(password) {
    // const hmac = crypto.createHmac('sha256', 'Sup3r_s3cr3t_k3yyyy');
    const hash = crypto.createHash('sha256')
    return hash.update(password).digest('hex')
}

function verifyUser(checkingUser) {
    return userModel.find()
        .then(users => (users || []).find(user =>
            user.username === checkingUser.username &&
            user.password === hashPassword(checkingUser.password)
        ))
}


function handleAuthResponse(response, isSuccessful = false) {
    const data = {
        status: isSuccessful ? 'success' : 'fail'
    }
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(data));
}

module.exports = { insertUser, verifyUser, removeUser, updateUser, handleAuthResponse, findTasks, findTaskById, findUsers, findUserById, insertTask, updateTask, removeTask }