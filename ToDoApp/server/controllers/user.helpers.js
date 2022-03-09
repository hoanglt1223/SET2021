
const { User } = require('../models')
const crypto = require('crypto')
const { cacheClient } = require('./cache.helper')

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
    isAdmin: user.isAdmin,
    isDeleted: user.isDeleted
  }
  return User.create(newUser)
}

function findUsers() {
  return cacheClient.get('userList')
    .then(usersCached => {
      if (usersCached && usersCached.users) {
        return JSON.parse(usersCached.users)
      }
      else {
        return User.find().then(users => {
          if (!users) {
            throw new Error('Failed to get USERS LIST from Database');
          }
          const today = new Date();
          const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
          const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
          const dateTime = date + ' ' + time;
          const cachingUsersList = {
            users: users,
            modifiedAt: dateTime,

          }
          cacheClient.set('userList', JSON.stringify(cachingUsersList))
            .then(() => {
              // cacheClient.expireAt('userList', parseInt((+new Date) / 1000) + 86400);
              // 24 hours
              cacheClient.expire('userList', 86400);
            }
            )

          return users
        })

      }
    })
}

function findUserById(id) {
  return User.find({ _id: id });
}

function removeUserById(id) {
  return User.findByIdAndRemove(id)
}

function updateUserById(id, userUpdate) {
  return User.findByIdAndUpdate(id, userUpdate)
}

function hashPassword(password) {
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

module.exports = { insertUser, findUsers, findUserById, removeUserById, updateUserById, verifyUser, hashPassword }