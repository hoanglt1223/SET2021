const http = require('http');
require('dotenv').config();

let hostname = process.env.HOST;
let port = process.env.PORT;



const tasks = [
  {
    id: process.env.ID1,
    name: process.env.NAME1
  }, 
  {
    id: process.env.ID2,
    name: process.env.NAME1
  },
  {
    id: process.env.ID3,
    name: process.env.NAME1
  },
  {
    id: process.env.ID4,
    name: process.env.NAME1
  }
]

// define server  
const server = http.createServer((req, res, reqParam) => {
  res.statusCode = 200;
  const tasksUploaded = JSON.stringify(tasks);
  res.setHeader('Content-Type', 'text/plain');
  if (req.method == "GET"){
    if (req.url == "/tasks"){
      return res.end(tasksUploaded);
    } else {
      tasks.forEach((task) => {
        let url =  "/tasks/:" + task.id;
        if (req.url == url){
          let taskUpload = JSON.stringify(task);
          return res.end(taskUpload);
        } 
      })
    }
  }
   
  
  res.end("run http://127.0.0.1:3001/tasks to get all tasks");
  console.log(req);
  console.log(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
