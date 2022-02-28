const { LogInfoType } = require("../constants");
const logger = require("./logger");

function errorHandler(res, message) {
  logger(LogInfoType.ERROR, message);
  res.end(JSON.stringify({ error: message }));
}

module.exports = errorHandler;
