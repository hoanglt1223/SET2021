const mongoose = require("mongoose");
const { User } = require("../model");
const { getParameterByName } = require("../utils");

async function getUsers(req, res) {
  const users = await User.find();
  const userId = getParameterByName("id", req.url);

  if (userId) {
    const userObjectId = mongoose.Types.ObjectId(userId);
    const currentUser = await User.findById(userObjectId);
    res.end(JSON.stringify(currentUser));
  }

  res.end(JSON.stringify(users));
}

const userController = {
  getUsers,
};

module.exports = userController;
