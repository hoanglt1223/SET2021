const crypto = require('crypto')
const { userRepository } = require('../models');


/*=====Insert User======*/
function insertUser(user) {
    const password = user.password ? hashPassword(user.password) : undefined
    const newUser = {
        username: user.username,
        password: password,
        tasks : user.tasks,
        isAdmin: user.isAdmin,
    }
    return userRepository.create(newUser);
}

function verifyUser(user){
    return {
        username: user.username,
        password: user.password,
        isAdmin: (user.isAdmin === 'true') ? true : false,
        isDeleted: (user.isDeleted === 'true') ? true: false,
    }
}

/*======Hash Password=========*/
function hashPassword(password) {
    // const hmac = crypto.createHmac('sha256', 'Sup3r_s3cr3t_k3yyyy');
    const hash = crypto.createHash('sha256')
    return hash.update(password).digest('hex')
}

function validateUser(checkingUser) {
    return userRepository.find({username: checkingUser.username, password: hashPassword(checkingUser.password)});
}

function handleAuthResponse(response, isSuccessful = false) {
    const data = {
        status: isSuccessful ? 'success' : 'fail'
    }
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(data));
}

function findUsers(user = {}){
    return userRepository.find(user);
}

function updateUser(userID, user){
    return userRepository.findByIdAndUpdate(userID, user);
}

function findUserByID(userID){
    return userRepository.findById(userID);
}


module.exports = { insertUser, validateUser, handleAuthResponse, findUsers, updateUser, findUserByID, verifyUser }