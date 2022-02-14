const mongoose = require('mongoose')
const  Schema  = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  tasks:{
    type : [{type: String}],
    required: false
  },
  isAdmin:{
    type: Boolean,
    required: true
  },
  isDeleted:{
    type: Boolean,
    default: false,
  }
})

const Users = mongoose.model('users', userSchema);
module.exports = Users;
