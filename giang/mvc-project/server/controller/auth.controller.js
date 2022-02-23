const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    throw new Error("User does not exists in system");
  }

  const isMatchPassword = existsUser.comparePassword(password);

  if (!isMatchPassword) {
    throw new Error("Username or password invalid");
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

const authController = {
  register,
  login,
};

module.exports = authController;
