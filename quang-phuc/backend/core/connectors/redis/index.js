const redis = require('redis')
const redisClient = redis.createClient('redis://localhost:6379')

redisClient.on('error', (err) => {
    console.log('Error occured while connecting or accessing redis server');
});

module.exports = redisClient;
