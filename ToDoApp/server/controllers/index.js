const {addProject, verifyProject, findProjects} = require('./projects.helpers')
const {handleError} = require('../helper');
const { Project } = require('../models');

function handleAuthResponse(response, isSuccessful = false) {
    const data = {
        status: isSuccessful ? 'success' : 'fail'
    }
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(data));
}


function handleDataResponse(response, data){
    response.statusCode = 200;
    response.end(JSON.stringify(data));
}

function createProject(request, response){
    const project = verifyProject(request.body);
    addProject(project)
    .then(() => {
        handleAuthResponse(response, true);
    })
    .catch(err => {
        handleError(err, 'controllers/index.js', 'createProject')
        handleAuthResponse(response, false);
    })
}

function getProjects(request, response){
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
    .catch ((error) => {
        handleError(error, '../controllers/index.js', 'getProjects');
        handleAuthResponse(response, false);
    })
}

module.exports = {createProject, getProjects}