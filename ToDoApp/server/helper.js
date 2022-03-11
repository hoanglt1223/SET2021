
const logger = require('./loggingServer/index')
exports.handleError = function handleError(
    error,
    filePath = '',
    functionName = ''
) {
    logger.error(`${filePath} -> ${functionName} -> Error: ${error}`)
}

function getCurrentTime() {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date + ' ' + time;
}

module.exports = {
    getCurrentTime
}