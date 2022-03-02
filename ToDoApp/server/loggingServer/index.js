const developmentLogger = require('./developmentLogger')
const stagingLogger = require('./stagingLogger')
const productionLogger = require('./productionLogger')

const chooseLogger = () => {
  if (process.env.NODE_ENV === "development") {
    return developmentLogger()
  }

  if (process.env.NODE_ENV === "staging") {
    return stagingLogger()
  }

  if (process.env.NODE_ENV === "production") {
    return productionLogger()
  }
}

const logger = chooseLogger()

module.exports = logger;

