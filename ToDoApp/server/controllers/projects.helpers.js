const mongoose = require('mongoose')
const {Project} = require('../models');

function addProject(project){

    return Project.create(project);
}

function verifyProject(project){
    return {
        projectName : project.projectName,
        taskList : project.taskList.map((task, index) => {
            return {
                taskName : task.taskName,
                isDone : (task.isDone === 'true') ? true : false 
            }
        }),
        memberList: project.memberList.map((member, index) => {
            return {
                memberName : member.memberName,
                isKicked : (member.isKicked === 'true') ? true : false,
                isLeader : (member.isLeader === 'true') ? true : false,
            }
        }),
        isDeleted : (project.isDeleted === 'true') ? true : false
    }
}

module.exports = {addProject, verifyProject}