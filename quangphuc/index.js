const http = require("http");
let {tasks} = require("./repositories/tasks.json");
const {routerFactory, Router} = require("./routers");
const {getPathAndQuery} = require("./utilities");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(async (req, res) => {

  const {path, query} = getPathAndQuery(req);

  const router = routerFactory.getRouter(req, res);
  await router.handle(req, res);


  // switch(req.method){
  //   case 'GET':
  //     if (path[0]) {
  //       switch (path[0]) {
  //         case "tasks":
  //           if (query.id) {
  //             const task = tasks.find((task) => task.id === query.id);
  //             if (task) {
  //               res.statusCode = 200;
  //               res.setHeader("Content-Type", "application/json");
  //               res.end(JSON.stringify(task));
  //             } else {
  //               res.statusCode = 404;
  //               res.setHeader("Content-Type", "text/plain");
  //               res.end("Task not found");
  //             }
  //           } else {
  //             res.statusCode = 200;
  //             res.setHeader("Content-Type", "application/json");
  //             res.end(JSON.stringify(tasks));
  //           }
  //           break;
  //         case "image":
  //           const fs = require("fs");
  //           fs.readFile("image.png", function (err, data) {
  //             if (err) throw err; // Fail if the file can't be read.
  //             res.writeHead(200, { "Content-Type": "image/png" });
  //             res.end(data); // Send the file data to the browser.
  //           });
  //           break;
  //         default:
  //           res.statusCode = 404;
  //           res.setHeader("Content-Type", "text/plain");
  //           res.end("Invalid URL");
  //           break;
  //       }
  //     } else {
  //       //root path
  //       res.statusCode = 200;
  //       res.setHeader("Content-Type", "text/plain");
  //       res.end('hello world');
  //     }
  //     break;
  //   case 'DELETE':
  //     if(path[0]){
  //       switch(path[0]){
  //         case 'tasks':
  //           const taskId = path[1];
  //           const task = tasks.find((task) => task.id === taskId);
  //           if(task) {
  //             tasks = tasks.filter(task => task.id !== taskId)
  //             res.statusCode = 204;
  //             res.end();
  //           } else {
  //             res.statusCode = 404;
  //             res.setHeader("Content-Type", "text/plain");
  //             res.end("Invalid request/Not successful");
  //           }
  //           break;
  //       }
  //     } else {
  //       res.statusCode = 404;
  //       res.setHeader("Content-Type", "text/plain");
  //       res.end("Invalid request");
  //     }
  //     break;
  //   case 'POST':
  //     if(path[0]){
  //       switch(path[0]){
  //         case 'tasks':
  //           const body = await getRequestBody(req);
  //           const task = tasks.find((task) => task.id === body.id);
  //           if(task) {
  //             res.statusCode = 404;
  //             res.setHeader("Content-Type", "text/plain");
  //             res.end("Invalid request");
  //           }
  //           else {
  //             tasks.push(body);
  //             res.statusCode = 204;
  //             res.end();
  //           }
  //           break;
  //       }
  //     } else {
  //       res.statusCode = 404;
  //       res.setHeader("Content-Type", "text/plain");
  //       res.end("Invalid request");
  //     }
  //     break;
  //   case 'PATCH':
  //     if(path[0]){
  //       switch(path[0]){
  //         case 'tasks':
  //           const body = await getRequestBody(req);
  //           let task = tasks.find((task) => task.id === path[1]);
  //           if(task) {
  //             const index = tasks.findIndex(task => task.id === path[1]);
  //             tasks[index] = {...task, ...body};
  //             tasks.forEach(item => {
  //               if(item.id === task.id){
  //                 item = task;
  //               }
  //             })
  //             res.statusCode = 204;
  //             res.end();
  //           }
  //           else {
  //             res.statusCode = 404;
  //             res.setHeader("Content-Type", "text/plain");
  //             res.end("Invalid request");
  //           }
  //           break;
  //       }
  //     } else {
  //       res.statusCode = 404;
  //       res.setHeader("Content-Type", "text/plain");
  //       res.end("Invalid request");
  //     }
  //     break;
  // }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
