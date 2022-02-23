const { getBodyData } = require("../middlewares");
const userController = require("../controller/user.controller");
const { saveUser, authen } = require("../middlewares");

const userRouter = {
  GET: {
    "/users": {
      controller: userController.getUsers,
      middlewares: [saveUser, authen],
    },
  },
  POST: {
    "/users": {
      controller: () => {},
      middlewares: [getBodyData],
    },
  },
  DELETE: {
    "/users": {
      controller: () => {},
      middlewares: [],
    },
  },
  PUT: {
    "/users": {
      controller: () => {},
      middlewares: [getBodyData],
    },
  },
  PATCH: {
    "/users": {
      controller: () => {},
      middlewares: [getBodyData],
    },
  },
  OPTIONS: {
    "/users": {
      controller: (_, res) => {
        res.end();
      },
      middlewares: [],
    },
  },
};

module.exports = userRouter;
