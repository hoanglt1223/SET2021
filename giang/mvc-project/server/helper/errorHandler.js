const { LogInfoType } = require("../constants");
const logger = require("./logger");

async function errorHandler(res, message) {
  await logger(LogInfoType.ERROR, message);
  res.end(JSON.stringify({ error: message }));
}

module.exports = errorHandler;
