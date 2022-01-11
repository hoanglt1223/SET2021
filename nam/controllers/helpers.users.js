const crypto = require('crypto')
const { userRepository } = require('../models');



/*=====Insert User======*/
function insertUser(user) {
    const password = user.password ? hashPassword(user.password) : undefined
    const newUser = {
        username: user.username,
        password: password,
    }
    return userRepository.create(newUser);
}

/*======Hash Password=========*/
function hashPassword(password) {
    // const hmac = crypto.createHmac('sha256', 'Sup3r_s3cr3t_k3yyyy');
    const hash = crypto.createHash('sha256')
    return hash.update(password).digest('hex')
}

/*======Verify=========*/
function verifyUser(checkingUser) {
    return userRepository.find({username: checkingUser.username, password: hashPassword(checkingUser.password)});
}

/*======Handle=========*/
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


module.exports = { insertUser, verifyUser, handleAuthResponse, findUsers }