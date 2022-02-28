const developmentLogger = require('./developmentLogger')
const stagingLogger = require('./stagingLogger')
const productionLogger = require('./productionLogger')

let logger = null;
if (process.env.NODE_ENV === "development") {
    logger = developmentLogger()
}

if (process.env.NODE_ENV === "staging") {
  logger = stagingLogger()
}

if (process.env.NODE_ENV === "production") {
    logger = productionLogger()
}

module.exports = logger;