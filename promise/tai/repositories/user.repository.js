const Repository = require('./base.repository')
const UserModel = require('../models')

const userRepository = new Repository("user", UserModel)

module.exports = userRepository