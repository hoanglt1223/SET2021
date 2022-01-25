const {addProject, verifyProject} = require('./projects.helpers')
const {handleError} = require('../helper')

function handleAuthResponse(response, isSuccessful = false) {
    const data = {
        status: isSuccessful ? 'success' : 'fail'
    }
    response.setHeader('Content-Type', 'application/json');
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

module.exports = {createProject}