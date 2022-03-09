const cron = require('node-cron')
const {User, Project} = require("../models");
const redisClient = require("../core/connectors/redis");
const {schedule} = require("node-cron");

cron.schedule('*/30 * * * * *', () => {
    User.find().then((data) => {
        redisClient.set('users', data);
    })
    Project.find().then((data) => {
        redisClient.set('projects', data);
    })
}, {schedule: true})

module.exports = cron;
