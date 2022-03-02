const { createLogger, format, transports } = require('winston');


const developmentLogger = () => {
  const customizePrint = (info) => {
    return `[development] - [${info.level.toUpperCase()}] - [${info.timestamp}]:${info.message}`
  }


  const customizeFormat = format.combine(
    format.timestamp({ format: 'DD-MM-YYYY hh:mm:ss' }),
    format.align(),
    format.printf(customizePrint),
  )

  return createLogger({
    transports: [
      new transports.Console({
        filename: 'logs/development/info.log',
        format: customizeFormat,
      }),

      new transports.File({
        level: 'info',
        filename: 'logs/development/info.log',
        format: customizeFormat,

      }),

      new transports.File({
        level: 'error',
        filename: 'logs/errors/development/error.log',
        format: customizeFormat,

      }),
    ]
  });
}

module.exports = developmentLogger;