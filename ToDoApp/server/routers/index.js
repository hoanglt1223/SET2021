const express = require('express')
const router = express.Router();
const { parseRequestBody, authenticate } = require('../middlewares/')
const { createProject,
    getProjects,
    deleteProject, updateProjectAddTaskByID, updateProjectDoneTaskByID, updateProjectDeleteTaskByID, signUp, getUsers, getUser, deleteUser, editUser, logIn } = require('../controllers');
const  logger  = require('../loggingServer/index')
const {api} = require('./helper')


// >>>>>>>>>>>>>> Middleware
router.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    res.setHeader('Access-Control-Allow-Headers', "Authorization")
    logger.info(req.method + '  ->  ' + req.url)
    parseRequestBody(req, res)
    .then(() => next());
})

router.use('/authentication', (req, res, next) => {
    authenticate(req, res).then(() => next());
})


// >>>>>>>>>>>>>> CONTROLLER
//================== GET

router.get(api.GET.projects.value, (req, res) => {
    getProjects(req, res);
})

router.get(api.GET.users.value, (req, res) => {
    getUsers(req, res);
})


//================== POST

router.post(api.POST.addProject.value, (req, res) => {
    createProject(req, res)
})

router.post(api.POST.signUp.value, (req, res) => {
    signUp(req, res)
})

router.post(api.POST.getUser.value, (req, res) => {
    getUser(req, res)
})

router.post(api.POST.logIn.value, (req, res) => {
    logIn(req, res)
})

//================== DELETE

router.delete(api.DELETE.project.value, (req, res) => {
    deleteProject(req, res)
})

router.delete(api.DELETE.user.value, (req, res) => {
    deleteUser(req, res)
})

//================== PUT


//================== PATCH

router.patch(api.PATCH.editProject.add.value, (req, res) => {
    updateProjectAddTaskByID(req, res)
})

router.patch(api.PATCH.editProject.done.value, (req, res) => {
    updateProjectDoneTaskByID(req, res)
})


router.patch(api.PATCH.editProject.delete.value, (req, res) => {
    updateProjectDeleteTaskByID(req, res)
})

router.patch(api.PATCH.editUser.value, (req, res) => {
    editUser(req, res)
})



module.exports = { router }