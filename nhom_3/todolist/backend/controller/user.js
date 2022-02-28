const url = require("url");
const { handleError, handleAuthResponse } = require("../helpers");
const {
  findUsers,
  insertUser,
  updateUser,
  findUserById,
  validateUser,
  verifyUser,
} = require("./helpers");
const jwt = require("jsonwebtoken")

function handleNotFound(request, response) {
  const parsedUrl = url.parse(request.url, true);
  response.statusCode = 404;
  response.end(`Route ${parsedUrl.pathname} not found.`);
}

function signUp(request, response) {
  const user = request.body;
  insertUser(user)
    .then(() => {
      handleAuthResponse(response, true);
    })
    .catch((error) => {
      handleError(error, "controllers/user.js", "signUp");
      handleAuthResponse(response, false);
    });
}

function signIn(request, response) {
  const user = request.body
  response.setHeader('Content-Type', 'application/json');
  verifyUser(user).then(foundUser => {
    if (!foundUser) {
      throw new Error('User not found')
    }
    const token = jwt.sign(
      { userId: foundUser.id },
      'RANDOM_TOKEN_SECRET',
      { expiresIn: '24h' }
    )
    const data = {
      token,
      userId: foundUser.id,
    };
    response.end(JSON.stringify(data));
  }).catch(err => {
    handleError(err, "controllers/index.js", "signIn");
    response.end(JSON.stringify("Username or password is not correct."));
  })
}

function getUsers(request, response) {
  response.setHeader("Content-Type", "application/json");
  findUsers()
    .then((data) => {
      response.end(JSON.stringify(data));
    })
    .catch((error) => {
      handleError(error, "controllers/user.js", "getUser");
      handleAuthResponse(response, false);
    });
}

function getUserById(request, response) {
  response.setHeader("Content-Type", "application/json");
  const userId = request.body;
  findUserById(userId)
    .then((foundUser) => {
      if (foundUser) {
        let info = {
          _id: foundUser._id,
          name:foundUser.name,
          username: foundUser.username,
          password: foundUser.password, 
          gender: foundUser.gender, 
          age: foundUser.age, 
          isAdmin: foundUser.isAdmin,
          isDeleted: foundUser.isDeleted,
        };
        response.statusCode = 200;
        response.end(JSON.stringify(info));
      } else {
        throw new Error("Unknown user");
      }
    })
    .catch((error) => {
      handleError(error, "controllers/user.js", "getUserById");
      handleAuthResponse(response, false);
    });
}

function editUserById(request, response) {
  const user = request.body;
  const userId = user._id;
  updateUser(userId, user)
    .then(() => {
      handleAuthResponse(response, true);
    })
    .catch((error) => {
      handleError(error, "controllers/user.js", "editUserByID");
      handleAuthResponse(response, false);
    });
}

function deleteUserById(request, response) {
  let user = request.body;
  const userId = user._id;
  findUserById(userId)
    .then((foundUser) => {
      debugger;
      if (foundUser) {
        foundUser.isDeleted = true;
        updateUser(userId, foundUser).then(() => {
          handleAuthResponse(response, true);
        });
      } else {
        handleAuthResponse(response, false);
      }
    })
    .catch((error) => {
      handleError(error, "controllers/Users.js", "deleteUserByID");
      handleAuthResponse(response, false);
    });
}

module.exports = {
  signUp,
  signIn,
  getUsers,
  getUserById,
  editUserById,
  deleteUserById,
};
