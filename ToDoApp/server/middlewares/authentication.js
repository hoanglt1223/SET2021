const jwt = require('jsonwebtoken');
<<<<<<< HEAD
// const { userRepository } = require('../repositories')
const { handleError } = require('../helper')
const { User } = require('../models')


=======
const { handleError } = require('../helper')
const {User} = require('../models')
>>>>>>> todoList
function authenticate(req, res) {
    try {
        if (!req.headers.authorization) {
            throw new Error('Invalid token.')
        }
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const { userId } = decodedToken;

        return User.findById(userId).then(foundUser => {
            if (!foundUser) {
                throw new Error('Invalid token.')
            }
            else {
                res.send(foundUser)
            }
        })
    } catch (err) {
        if (!err.message) {
            handleError(err, 'middlewares/authentication.js', 'authenticate')
        }
        const message = err.message || 'Invalid request!'
        res.statusCode = 401
        res.send(message)
    }
}

module.exports = authenticate