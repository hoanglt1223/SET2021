const cron = require('node-cron')
const {User, Project} = require("../models");
const redisClient = require("../core/connectors/redis");

cron.schedule('*/30 * * * * *', () => {
    User.find().then((data) => {
        redisClient.set('users', JSON.stringify(data));
    })
    Project.find().then((data) => {
        redisClient.set('projects', JSON.stringify(data));
    })
}, {schedule: true})

module.exports = cron;
