const cron = require('node-cron')
const { Project } = require('../models');
const { cacheClient } = require('./helper');
const { getCurrentTime } = require('../helper')
const { keyCache } = require('./key');
const logger = require('../loggingServer');
const TIME_EXPIRE = require('../constant/expirationTime')
const {CronExpression} = require('../constant/cronTime')


function cacheProjects(projectsToCache = undefined) {
    try {
        return new Promise((resolve, reject) => {
            if (!projectsToCache) {
                resolve(Project.find({}))
            }
            resolve(projectsToCache)
        })
            .then((projects) => {

                cacheClient.set(keyCache.projects, JSON.stringify({
                    projects: projects,
                    modifiedAt: getCurrentTime()
                })).then(() => {
                    cacheClient.expire(keyCache.projects, TIME_EXPIRE.projects);
                })
                    .catch(err => {
                        logger.info(err);
                    })
            }).then(() => {
                logger.info(`Checked caching data - port: ${6379}`);
            })
    }
    catch (err) {
        logger.error(err);
    }

}

function handleCaching(error, data) {
    if (error) {
        logger.error(`Failed to cache at port : ${6379} -> ${error}`)
    }
    else {
        if (data <= 0) {
            cacheClient()
        }
    }
}

const cronJob = cron.schedule(CronExpression.Project, () => {
    cacheClient.get(keyCache.projects).then(cachedProjects => {
        if (cachedProjects) {
            return cacheClient.ttl(keyCache.projects, handleCaching)
        }
        else {
            cacheProjects()
        }
    })


})


module.exports = { cronJob, cacheProjects }