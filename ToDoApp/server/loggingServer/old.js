// const winston = require('winston');
// const path = require('path');

// module.exports = winston.createLogger({
//   // format của log được kết hợp thông qua format.combine
//   format: winston.format.combine(
//     winston.format.splat(),
//     // Định dạng time cho log
//     winston.format.timestamp({
//       format: 'YYYY-MM-DD HH:mm:ss'
//     }),
//     // thêm màu sắc
//     winston.format.colorize(),
//     // thiết lập định dạng của log
//     winston.format.printf(
//       log => {
//         // nếu log là error hiển thị stack trace còn không hiển thị message của log 
//         if(log.stack) return `[${log.timestamp}] [${log.level}] ${log.stack}`;
//         return  `[${log.timestamp}] [${log.level}] ${log.message}`;
//       },
//     ),
//   ),
//   transports: [
//     // hiển thị log thông qua console
//     new winston.transports.Console(),
//     // Thiết lập ghi các errors vào file 
//     new winston.transports.File({
//       level: 'error',
//       filename: path.join(__dirname, 'errors.log')
//     })  
//   ],
// })

// const { createLogger, format, transports } = require('winston');
// const { combine, timestamp, label, printf } = format;

// const productionLogger = () => {
//     const myFormat = printf(({ level, message, timestamp }) => {
//         return `${timestamp} ${level}: ${message}`;
//       });
    
//     return createLogger({
//         level: 'info',
//         format: combine(
//             format.colorize(),
//             label({ label: 'right meow!' }),
//             timestamp({format: "HH:mm:ss"}),
//             myFormat
//           ),
//         //defaultMeta: { service: 'user-service' }, 
//         transports: [
//             new transports.Console(),
//             new transports.File({
//                 filename: 'errors.log',
                
//               })
//         ],
//       });
// }

//   module.exports = productionLogger;