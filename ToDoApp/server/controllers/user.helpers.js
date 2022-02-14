
const mongoose = require('mongoose')
const { User } = require('../models')
const crypto = require('crypto')

function insertUser(user) {
  const password = user.password ? hashPassword(user.password) : undefined
  const newUser = {
      name: user.name,
      username: user.username,
      password,
      age: user.age,
      gender: user.gender,
      taskList: (user.taskList) ? user.taskList.map((task, index) => {
        return {
            taskName: task.taskName,
            isDone: (task.isDone === 'true') ? true : false
        }
      }) : {},
      isAdmin: (user.isAdmin === 'true') ? true : false,
      isDeleted: (user.isDeleted === 'true') ? true : false
  }
  return User.create(newUser)
}


function findUsers() {
  return User.find();
}

function findUserById(id){
  return User.find({_id: id});
}

function removeUser(id) {
  return User.findByIdAndRemove(id)
}

function updateUser(id, userUpdate) {
  return User.findByIdAndUpdate(id, userUpdate)
}



function hashPassword(password) {
  // const hmac = crypto.createHmac('sha256', 'Sup3r_s3cr3t_k3yyyy');
  const hash = crypto.createHash('sha256')
  return hash.update(password).digest('hex')
}

function verifyUser(checkingUser) {
  return User.find()
      .then(users => (users || []).find(user =>
          user.username === checkingUser.username &&
          user.password === hashPassword(checkingUser.password)
      ))
}

module.exports = { insertUser, findUsers, findUserById, removeUser, updateUser, verifyUser }