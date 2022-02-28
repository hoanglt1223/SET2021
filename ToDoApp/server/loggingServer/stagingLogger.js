const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;


const stagingLogger = () => {
  const customizePrint = (info) => {
    return `[staging] - [${info.level.toUpperCase()}] - [${info.timestamp}]:${info.message}`
  }
  
  
  const customizeFormat = format.combine(
    format.timestamp({ format: 'DD-MM-YYYY hh:mm:ss' }),
    format.align(),
    format.printf(customizePrint),
  )

    return createLogger({
      transports: [
        new transports.Console({
            filename: 'logs/staging/info.log',
            format: customizeFormat,
        }),

        new transports.File({
            level: 'info',
            filename: 'logs/staging/info.log',
            format: customizeFormat,

        }),

        new transports.File({
            level: 'error',
            filename: 'logs/errors/staging/error.log',
            format: customizeFormat,

        }),
      ]
      });
}

  module.exports = stagingLogger;