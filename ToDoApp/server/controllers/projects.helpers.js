const mongoose = require('mongoose')
const { Project } = require('../models');

function addProject(project) {

    return Project.create(project);
}

function verifyProject(project) {
    debugger
    if (project[0] === undefined ) {
        return {};
    }
    else {
        return {
            projectName: project.projectName,
            taskList: (project.taskList) ? project.taskList.map((task, index) => {
                return {
                    taskName: task.taskName,
                    isDone: (task.isDone === 'true') ? true : false
                }
            }) : {},
            memberList: (project.memberList) ? project.memberList.map((member, index) => {
                return {
                    memberName: member.memberName,
                    isKicked: (member.isKicked === 'true') ? true : false,
                    isLeader: (member.isLeader === 'true') ? true : false,
                }
            }) : {},
            isDeleted: (project.isDeleted === 'true') ? true : false
        }
    }
}

function findProjects(prpos = {}) {
    return Project.find(prpos)
}



function handleNotFound(req, res) {
    const parsedUrl = url.parse(req.url, true)
    res.statusCode = 404
    res.end(`Route ${parsedUrl.pathname} not found.`)
}


module.exports = { addProject, verifyProject, findProjects, handleNotFound }