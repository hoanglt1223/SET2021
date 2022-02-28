const url = require("url");
const { handleError, handleNotFound } = require("./helpers");
const { parseRequestBody } = require("./middlewares");
const {
  taskController,
  userController,
  projectController,
  projectUsersController,
} = require("./controller");

const routes = {
  GET: {
    "/tasks": {
      controller: taskController.getTasks,
      middlewares: [parseRequestBody],
    },
    "/users": {
      controller: userController.getUsers,
      middlewares: [parseRequestBody],
    },
    "/projects": {
      controller: projectController.getProjects,
      middlewares: [parseRequestBody],
    },
    "/project-users": {
      controller: projectUsersController.getProjectUsers,
      middlewares: [parseRequestBody],
    },
  },
  DELETE: {
    "/delete-task": {
      controller: taskController.deleteTaskById,
      middlewares: [parseRequestBody],
    },
    "/delete-user": {
      controller: userController.deleteUserById,
      middlewares: [parseRequestBody],
    },
    "/delete-project": {
      controller: projectController.deleteProjectById,
      middlewares: [parseRequestBody],
    },
  },
  POST: {
    "/tasks": {
      controller: taskController.addTask,
      middlewares: [parseRequestBody],
    },
    "/find-task": {
      controller: taskController.getTaskById,
      middlewares: [parseRequestBody],
    },
    "/sign-up": {
      controller: userController.signUp,
      middlewares: [parseRequestBody],
    },
    "/sign-in": {
      controller: userController.signIn,
      middlewares: [parseRequestBody],
    },
    "/find-user": {
      controller: userController.getUserById,
      middlewares: [parseRequestBody],
    },
    "/project": {
      controller: projectController.addProject,
      middlewares: [parseRequestBody],
    },
    "/find-project": {
      controller: projectController.getProjectById,
      middlewares: [parseRequestBody],
    },
    "/project-users": {
      controller: projectUsersController.addUserToProject,
      middlewares: [parseRequestBody],
    },
    "/find-project-user": {
      controller: projectUsersController.getProjectUserById,
      middlewares: [parseRequestBody],
    },
  },
  PATCH: {
    "/edit-task": {
      controller: taskController.editTaskById,
      middlewares: [parseRequestBody],
    },
    "/edit-user": {
      controller: userController.editUserById,
      middlewares: [parseRequestBody],
    },
    "/edit-project": {
      controller: projectController.editProjectById,
      middlewares: [parseRequestBody],
    },
    "/edit-project-user": {
      controller: projectUsersController.addUserToProject,
      middlewares: [parseRequestBody],
    },
  },
};

function getRouter(req) {
  const parsedUrl = url.parse(req.url, true);
  console.log(req.method, parsedUrl.pathname);
  if (routes[req.method] && routes[req.method][parsedUrl.pathname]) {
    const currentRouteData = routes[req.method][parsedUrl.pathname];
    if (
      currentRouteData.middlewares &&
      currentRouteData.middlewares.length > 0
    ) {
      return function controller(req, res) {
        try {
          let promise = currentRouteData.middlewares[0](req, res);
          currentRouteData.middlewares.forEach((middleware, index) => {
            if (index > 0) {
              promise.then(() => middleware(req, res));
            }
          });
          // Call controller after all interceptor (middlewares)
          promise.then(() => currentRouteData.controller(req, res));
          return promise;
        } catch (error) {
          handleError(error, "router.js", "route() -> controller()");
          res.statusCode = 500;
          res.end();
        }
      };
    }
    return routes[req.method][parsedUrl.pathname].controller;
  }

  return handleNotFound;
}

module.exports = { routes, getRouter };
