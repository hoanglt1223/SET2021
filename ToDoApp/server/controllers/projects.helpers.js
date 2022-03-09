const { Project } = require('../models');
const { cacheClient } = require('./cache.helper');

function addProject(project) {
    return Project.create(project);
}

function verifyProject(project) {
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
        isDeleted: (project.isDeleted === 'true') ? true : false,
        _id: project._id
    }

}

function findProjects(props = {}) {
    return cacheClient.get('projectsList')
        .then(projectsCached => {
            if (projectsCached && projectsCached.projects) {
                return JSON.parse(projectsCached.projects)
            }
            else {
                return Project.find(props).then(projects => {
                    if (!projects) {
                        throw new Error('Failed to get USERS LIST from Database');
                    }
                    const today = new Date();
                    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    const dateTime = date + ' ' + time;
                    const cachingUsersList = {
                        projects: projects,
                        modifiedAt: dateTime,

                    }
                    cacheClient.set('projectsList', JSON.stringify(cachingUsersList))
                        .then(() => {
                            // cacheClient.expireAt('userList', parseInt((+new Date) / 1000) + 86400);
                            // 24 hours
                            cacheClient.expire('projectsList', 86400);
                        }
                        )

                    return projects
                })

            }
        })
}

function handleNotFound(req, res) {
    const parsedUrl = url.parse(req.url, true)
    res.statusCode = 404
    res.end(`Route ${parsedUrl.pathname} not found.`)
}

function deleteByID(id) {
    return Project.deleteOne({ _id: id });
}

function updateProjectByID(_id, update) {
    return Project.findByIdAndUpdate(_id, update);
}


module.exports = { addProject, verifyProject, findProjects, deleteByID, handleNotFound, updateProjectByID }