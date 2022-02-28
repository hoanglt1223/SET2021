const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { DBCollection } = require("../constants");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model(DBCollection.USER, userSchema);

module.exports = User;
