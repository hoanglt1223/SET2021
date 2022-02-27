const { getBodyData, saveUser, authen } = require("../middlewares");

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
    "/auth/me": {
      controller: authController.getMe,
      middlewares: [saveUser, authen],
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
    "/auth/login": {
      controller: (_, res) => {
        res.end();
      },
      middlewares: [],
    },
    "/auth/me": {
      controller: (_, res) => {
        res.end();
      },
      middlewares: [],
    },
    "/auth/register": {
      controller: (_, res) => {
        res.end();
      },
      middlewares: [],
    },
  },
};

module.exports = authRouter;
