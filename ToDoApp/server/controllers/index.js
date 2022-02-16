const { addProject, verifyProject, findProjects, deleteByID, updateProjectByID } = require('./projects.helpers')
const { handleError } = require('../helper');
const { Project } = require('../models');

function handleAuthResponse(response, isSuccessful = false, message = '#') {
    const data = {
        status: isSuccessful ? 'success' : 'fail',
        message: message
    }
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(data));
}


function handleDataResponse(response, data) {
    response.statusCode = 200;
    response.end(JSON.stringify(data));
}

function createProject(request, response) {
    const project = verifyProject(request.body);
    addProject(project)
        .then((projectAdded) => {
            handleAuthResponse(response, true, JSON.stringify(projectAdded._id));
        })
        .catch(err => {
            handleError(err, 'controllers/index.js', 'createProject')
            handleAuthResponse(response, false);
        })
}

function getProjects(request, response) {
    let project = verifyProject(request.body);
    if (project.projectName === undefined) project = {};
    findProjects(project)
        .then(foundProjects => {
            if (!foundProjects) {
                throw new Error('Unknow Projects')
            }
            else {
                handleDataResponse(response, foundProjects);
            }
        })
        .catch((error) => {
            handleError(error, '../controllers/index.js', 'getProjects');
            handleAuthResponse(response, false);
        })
}


function deleteProject(request, response) {
    const { _id } = request.body;
    updateProjectByID(_id, { isDeleted: true }).then(() => {
        handleAuthResponse(response, true)
    })
}

function updateProjectAddTaskByID(request, response) {
    const { taskName, isDone, projectID } = request.body;
    findProjects({ _id: projectID })
        .then(foundProject => {
            if (foundProject) {
                let project = foundProject[0];
                let taskList = project.taskList;
                taskList.push({ taskName: (taskName), isDone: isDone });
                updateProjectByID(projectID, {taskList: taskList}).then((demo) => {
                    handleDataResponse(response, demo)
                })
            }
        })

}

module.exports = { createProject, getProjects, deleteProject, updateProjectAddTaskByID }