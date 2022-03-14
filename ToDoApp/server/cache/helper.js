const redis = require("redis");
const port = 6379;
const cacheClient = redis.createClient({ host: "localhost", port: port });
const logger = require("../loggingServer");

cacheClient.on("connect", function () {
  logger.info(`You are now connected cache at port: ${port}`);
});

cacheClient.on("error", (err) => {
  logger.info("Redis Client Error : ", err);
});

module.exports = { cacheClient };
