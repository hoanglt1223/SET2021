const { addProject, verifyProject, findProjects, deleteByID, updateProjectByID } = require('./projects.helpers')
const { handleError } = require('../helper');
const mongoose = require('mongoose')

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
    const { taskName, isDone, projectID, isDeleted } = request.body;
    findProjects({ _id: projectID })
        .then(foundProject => {
            try {
                if (foundProject) {
                    const project = foundProject[0];
                    let taskList = project.taskList;
                    const newid = mongoose.Types.ObjectId();
                    taskList.push(
                        {
                            taskName: (taskName),
                            isDone: isDone,
                            isDeleted: isDeleted,
                            _id: newid,
                        });
                    updateProjectByID(projectID, { taskList: taskList }).then((project) => {
                        handleDataResponse(response, newid);
                    })
                }
            } catch (e) {
                handleError(error, '../controllers/index.js', 'updateProjectDoneTaskByID');
                handleAuthResponse(response, false);
            }
        })
}

function updateProjectDoneTaskByID(request, response) {
    const { projectID, taskID } = request.body;
    findProjects({ _id: projectID })
        .then((foundProject) => {
            const project = foundProject[0];
            project.taskList.forEach(task => {
                if (task._id.equals(taskID)) {
                    task.isDone = task.isDone ? false : true;
                }
            });
            updateProjectByID(project, { taskList: project.taskList }).then(() => {
                handleAuthResponse(response, true);
            })
        })
}

function updateProjectDeleteTaskByID(request, response) {
    const { projectID, taskID } = request.body;
    findProjects({ _id: projectID })
        .then((foundProject) => {
            const project = foundProject[0];
            project.taskList.forEach(task => {
                if (task._id.equals(taskID)) {
                    task.isDeleted = task.isDeleted ? false : true;
                }
            });
            updateProjectByID(project, { taskList: project.taskList }).then(() => {
                handleAuthResponse(response, true);
            })
        })
}
module.exports = { createProject, getProjects, deleteProject, updateProjectAddTaskByID, updateProjectDoneTaskByID, updateProjectDeleteTaskByID }