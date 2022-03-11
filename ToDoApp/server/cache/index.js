const { cacheClient } = require('./helper')
const { cronJob } = require('./cronJob')

cacheClient.connect();
cronJob.start();


module.exports = { cacheClient }