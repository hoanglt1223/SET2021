const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const errorHandler = require("../helper/errorHandler");

const { User } = require("../model");

async function register(req, res) {
  let newUser = req.body;
  const { SALT_ROUND = 10 } = process.env;

  newUser.password = bcrypt.hashSync(req.body.password, parseInt(SALT_ROUND));

  const user = await User.create(newUser);

  res.end(JSON.stringify(user));
}

async function login(req, res) {
  const { username, password } = req.body;

  const existsUser = await User.findOne({ username });

  if (!existsUser) {
    errorHandler(res, "User does't exist");
    return;
  }

  const isMatchPassword = existsUser.comparePassword(password);

  if (!isMatchPassword) {
    errorHandler(res, "Username or password invalid");
    return;
  }

  res.end(
    JSON.stringify({
      token: jwt.sign(
        { username: existsUser?.username, _id: existsUser?._id },
        process.env.SECRET_KEY
      ),
    })
  );
}

async function getMe(req, res) {
  const userId = req.user._id;
  const user = await User.findById(userId);

  console.log({ user });

  res.end(
    JSON.stringify({
      _id: user._id,
      username: user.username,
    })
  );
}

const authController = {
  register,
  login,
  getMe,
};

module.exports = authController;
