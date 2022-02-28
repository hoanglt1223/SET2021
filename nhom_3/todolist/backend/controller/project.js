const url = require("url");
const { handleError, handleAuthResponse } = require("../helpers");
const {
  findProjects,
  insertProject,
  updateProject,
  findProjectById,
} = require("./helpers");

function handleNotFound(request, response) {
  const parsedUrl = url.parse(request.url, true);
  response.statusCode = 404;
  response.end(`Route ${parsedUrl.pathname} not found.`);
}

function getProjects(request, response) {
  response.setHeader("Content-Type", "application/json");
  findProjects()
    .then((data) => {
      response.end(JSON.stringify(data));
    })
    .catch((error) => {
      handleError(error, "controllers/project.js", "getProject");
      handleAuthResponse(response, false);
    });
}

function getProjectById(request, response) {
  response.setHeader("Content-Type", "application/json");
  const projectId = request.body;
  findProjectById(projectId)
    .then((foundProject) => {
      if (foundProject) {
        let info = {
          _id: foundProject._id,
          projectName: foundProject.projectName,
          isDone: foundProject.isDone,
          isDeleted: foundProject.isDeleted,
        };
        response.statusCode = 200;
        response.end(JSON.stringify(info));
      } else {
        throw new Error("Unknown project");
      }
    })
    .catch((error) => {
      handleError(error, "controllers/project.js", "getProjectById");
      handleAuthResponse(response, false);
    });
}

function editProjectById(request, response) {
  const project = request.body;
  const projectId = project._id;
  updateProject(projectId, project)
    .then(() => {
      handleAuthResponse(response, true);
    })
    .catch((error) => {
      handleError(error, "controllers/user.js", "editProjectByID");
      handleAuthResponse(response, false);
    });
}

function deleteProjectById(request, response) {
  let projectId = request.body;
  findProjectById(projectId)
    .then((foundProject) => {
      debugger;
      if (foundProject) {
        foundProject.isDeleted = true;
        updateProject(projectId, foundProject).then(() => {
          handleAuthResponse(response, true);
        });
      } else {
        handleAuthResponse(response, false);
      }
    })
    .catch((error) => {
      handleError(error, "controllers/projects.js", "deleteprojectByID");
      handleAuthResponse(response, false);
    });
}

function addProject(request, response) {
  const project = request.body;

  insertProject(project)
    .then(() => {
      handleAuthResponse(response, true);
    })
    .catch((error) => {
      handleError(error, "controllers/project.js", "addProject");
      handleAuthResponse(response, false);
    });
}

function updateProjectUsers(projectId, project) {
  return projectModel.findByIdAndUpdate(projectId, project);
}

function pingWithAuth(request, response) {
  response.end("Success");
}

module.exports = {
  handleNotFound,
  getProjects,
  getProjectById,
  addProject,
  editProjectById,
  deleteProjectById,
};
