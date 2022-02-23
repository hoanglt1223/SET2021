const { getBodyData } = require("../middlewares");

const authController = require("../controller/auth.controller");

const authRouter = {
  GET: {
    "/auth": {
      controller: () => {},
      middlewares: [],
    },
  },
  POST: {
    "/auth/register": {
      controller: authController.register,
      middlewares: [getBodyData],
    },
    "/auth/login": {
      controller: authController.login,
      middlewares: [getBodyData],
    },
  },
  DELETE: {
    "/auth": {
      controller: () => {},
      middlewares: [],
    },
  },
  PUT: {
    "/auth": {
      controller: () => {},
      middlewares: [getBodyData],
    },
  },
  PATCH: {
    "/auth": {
      controller: () => {},
      middlewares: [getBodyData],
    },
  },
  OPTIONS: {
    "/auth": {
      controller: (_, res) => {
        res.end();
      },
      middlewares: [],
    },
  },
};

module.exports = authRouter;
