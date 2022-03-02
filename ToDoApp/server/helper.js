
const logger = require('./loggingServer/index')
exports.handleError = function handleError(
    error,
    filePath = '',
    functionName = ''
) {
    logger.error(`${filePath} -> ${functionName} -> Error: ${error}`)
}