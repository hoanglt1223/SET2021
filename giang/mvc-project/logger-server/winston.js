const { createLogger, format, transports } = require("winston");
const path = require("path");

const LEVEL = Symbol.for("level");

function filterOnly(level) {
  return format(function (info) {
    if (info[LEVEL] === level) {
      return info;
    }
  })();
}

module.exports = createLogger({
  // format của log được kết hợp thông qua format.combine
  format: format.combine(
    format.splat(),
    // Định dạng time cho log
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    // thiết lập định dạng của log
    format.printf((log) => {
      // nếu log là error hiển thị stack trace còn không hiển thị message của log
      if (log.stack) return `${log.timestamp} ${log.level} ${log.stack}`;
      return `${log.timestamp} ${log.level} ${log.message}`;
    })
  ),
  transports: [
    // hiển thị log thông qua console
    new transports.Console(),

    // Thiết lập ghi các errors vào file
    new transports.File({
      level: "error",
      format: filterOnly("error"),
      filename: path.join(__dirname, "errors.log"),
    }),
    // Thiết lập ghi các info vào file

    new transports.File({
      level: "info",
      format: filterOnly("info"),
      filename: path.join(__dirname, "info.log"),
    }),
  ],
});
