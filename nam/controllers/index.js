const url = require('url')
const jwt = require('jsonwebtoken')
const { insertUser, verifyUser, handleAuthResponse } = require('./helpers')
const { handleError } = require('../helpers')

function handleNotFound(req, res) {
  const parsedUrl = url.parse(req.url, true)
  res.statusCode = 404
  res.end(`Route ${parsedUrl.pathname} not found.`)
}

function signUp(request, response) {
  const user = request.body
  insertUser(user)
    .then((insertedUser) => {
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
  verifyUser(user).then(foundUser => {
    if (!foundUser) {
      throw new Error('User not found')
    }
    const token = jwt.sign(
      { userId: foundUser.id },
      'RANDOM_TOKEN_SECRET',
      { expiresIn: '24h' }
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
}

function pingWithAuth(req, res) {
  res.end('Success')
}

module.exports = {
  handleNotFound,
  signUp,
  signIn,
  pingWithAuth
}
