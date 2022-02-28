const { handleError, handleAuthResponse } = require("../helpers");
const {
  insertProjectUser,
  findProjectUserById,
  updateProjectUser,
  findProjectUsers,
} = require("./helpers");

function addUserToProject(request, response) {
  const projectUser = request.body;

  insertProjectUser(projectUser)
    .then(() => {
      handleAuthResponse(response, true);
    })
    .catch((error) => {
      handleError(error, "controllers/project-users.js", "addUserToProject");
      handleAuthResponse(response, false);
    });
}

function getProjectUsers(request, response) {
  response.setHeader("Content-Type", "application/json");
  findProjectUsers()
    .then((data) => {
      response.end(JSON.stringify(data));
    })
    .catch((error) => {
      handleError(error, "controllers/project-users.js", "getProjectUser");
      handleAuthResponse(response, false);
    });
}

function getProjectUserById(request, response) {
  response.setHeader("Content-Type", "application/json");
  const projectUserId = request.body;
  findProjectUserById(projectUserId)
    .then((foundProjectUser) => {
      if (foundProjectUser) {
        let info = {
          _id: foundProjectUser._id,
          projectId: foundProjectUser.projectId,
          userId: foundProjectUser.userId,
        };
        response.statusCode = 200;
        response.end(JSON.stringify(info));
      } else {
        throw new Error("Unknown project");
      }
    })
    .catch((error) => {
      handleError(error, "controllers/project-users.js", "getProjectUserById");
      handleAuthResponse(response, false);
    });
}

function editProjectUserById(request, response) {
  const projectUser = request.body;
  const projectUserId = projectUser._id;
  updateProjectUser(projectUserId, projectUser)
    .then(() => {
      handleAuthResponse(response, true);
    })
    .catch((error) => {
      handleError(error, "controllers/project-user.js", "editProjectUserById");
      handleAuthResponse(response, false);
    });
}

module.exports = {
  addUserToProject,
  getProjectUsers,
  getProjectUserById,
  editProjectUserById,
};
