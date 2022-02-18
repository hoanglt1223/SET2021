const { addProject, verifyProject, findProjects, deleteByID, handleNotFound, updateProjectByID } = require('./projects.helpers')
const { insertUser, findUsers, findUserById, removeUserById, updateUserById, verifyUser } = require('./user.helpers')
const jwt = require('jsonwebtoken')
const {handleError} = require('../helper');
const { Project } = require('../models');
const { User } = require('../models');

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
    const project = verifyProject(request.body);
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


function signUp(request, response) {
    const user = request.body;
    insertUser(user)
        .then(() => {
            handleAuthResponse(response, true)
        })
        .catch(err => {
            handleError(err, 'controllers/index.js', 'signUp')
            handleAuthResponse(response, false)
        })
}


function getUsers(request, response){
    response.setHeader('Content-Type', 'application/json');
    findUsers()
    .then(foundUsers => {
        if (!foundUsers) {
            throw new Error('Unknown Users')
        }
        else {
            handleDataResponse(response, foundUsers);
        }
    })
    .catch ((error) => {
        handleError(error, '../controllers/index.js', 'getUsers');
        handleAuthResponse(response, false);
    })
}

function getUser(request, response) {
    const id = request.body;
    response.setHeader('Content-Type', 'application/json');
    findUserById(id)
        // .then((data) => {
        //     response.end(JSON.stringify(data))
        // })
        .then(foundUser => {
            if (!foundUser) {
                throw new Error('Unknow User')
            }
            else {
                handleDataResponse(response, foundUser);
            }
        })
        .catch ((error) => {
            handleError(error, '../controllers/index.js', 'getUsers');
            handleAuthResponse(response, false);
        })
}

function deleteUser(request, response) {
    const { _id } = request.body;
    updateUserByID(_id, { isDeleted: true }).then(() => {
        handleAuthResponse(response, true)
    })
        .catch(err => {
            handleError(err, 'controllers/index.js', 'deleteUser')
            handleAuthResponse(response, false)
        })
        
}

function editUser(request, response) {
    const {_id, name, age, gender, isAdmin} = request.body;
    findUserById(_id)
        .then(foundUser => {
            try {
                if(foundUser){
                    updateProjectByID(_id, {name: name, age: age, gender: gender, isAdmin: isAdmin}).then(() => {
                        handleAuthResponse(response, true);
                    })
                }
            } catch (e) {
                handleError(error, '../controllers/index.js', 'editUser');
                handleAuthResponse(response, false);
            }       
        })
        
}

function signIn(request, response) {
    const user = request.body
    response.setHeader('Content-Type', 'application/json');
    verifyUser(user).then(foundUser => {
    if (!foundUser) {
        throw new Error('User not found')
    }
    const token = jwt.sign({ userId: foundUser.id },
    'RANDOM_TOKEN_SECRET', { expiresIn: '24h' }
    )
    const data = {
        token
    }
    response.end(JSON.stringify(data));
    }).catch(err => {
        handleError(err, 'controllers/index.js', 'signIn')
        response.statusCode = 404
        response.end('Username or password is not correct.')
    })
}


module.exports =  {createProject, getProjects, deleteProject, updateProjectAddTaskByID , updateProjectDoneTaskByID, updateProjectDeleteTaskByID, signUp, getUsers, getUser, deleteUser, editUser, signIn}