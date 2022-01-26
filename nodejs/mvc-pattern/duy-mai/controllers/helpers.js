const crypto = require('crypto')
const {
  userRepository
} = require('../repositories')

function insertUser(user) {
  const password = user.password ? hashPassword(user.password) : undefined
  const newUser = {
    username: user.username,
    password
  }
  return userRepository.createOne(newUser)
}

function hashPassword(password) {
  // const hmac = crypto.createHmac('sha256', 'Sup3r_s3cr3t_k3yyyy');
  const hash = crypto.createHash('sha256')
  return hash.update(password).digest('hex')
}

function verifyUser(checkingUser) {
  return userRepository.find()
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

module.exports = { insertUser, verifyUser, handleAuthResponse }