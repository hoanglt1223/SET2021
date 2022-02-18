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
  taskList:{
    type : [{type: String}],
    required: false
  },
  isAdmin:{
    type: Boolean,
    required: false
  },
  isDeleted:{
    type: Boolean,
    default: false,
  }
})

userSchema.statics.deleteByID = (_id) => {
  return this.deleteOne({_id: _id});
}

const Users = mongoose.model('users', userSchema);
module.exports = Users;