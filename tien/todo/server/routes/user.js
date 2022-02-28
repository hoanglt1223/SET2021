const { parseRequestBody } = require("../middlewares");
const userController = require("../controller/user");

const userRouter = {
  GET: {
    "/users": {
      controller: userController.getUsers,
    },
  },
  POST: {
    "/users": {
      controller: () => {},
      middlewares: [parseRequestBody],
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
      middlewares: [parseRequestBody],
    },
  },
  PATCH: {
    "/users": {
      controller: () => {},
      middlewares: [parseRequestBody],
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
