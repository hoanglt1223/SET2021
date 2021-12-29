const http = require('http');
require('dotenv').config();
const axios = require('axios');
const fs = require("fs");
const { resourceLimits } = require('worker_threads');



let hostname = process.env.HOST;
let port = process.env.PORT;



let tasks = [
  {
    id: process.env.ID1,
    name: process.env.NAME1,
    isDeleted: false
  },
  {
    id: process.env.ID2,
    name: process.env.NAME2,
    isDeleted: false
  },
  {
    id: process.env.ID3,
    name: process.env.NAME3,
    isDeleted: false
  },
  {
    id: process.env.ID4,
    name: process.env.NAME4,
    isDeleted: false
  }
]

const routes = {
  GET: {
    "/tasks" : getTasks,
    "/image" : getImage
  },
  DELETE: {
    "/tasks" : deleteTasks,
  },
  POST: {
    "/tasks" : postTasks,
  },
  PUT: {
    "/tasks" : putTasks,
  },
}

// define server  
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  let routeUrl = req.url.split("?")[0]
  let unhandledRouteUrl = routeUrl;
  if (routeUrl.search("/tasks") == -1){
    routeUrl = "/image"
  } else {
    routeUrl = "/tasks"
  }
  routes[req.method][routeUrl](unhandledRouteUrl, res, req);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});




function findIds() {
  let ids = [];
  tasks.forEach((task) => {
    if (!task.isDeleted) {
      ids.push(task.id);
    }
  })
  return ids;
}

function getTasks(url, res, req) {
  if (url == "/tasks"){
    res.end(JSON.stringify(tasks));
  } else {
    getTask(url, res, req);
  }
}

function getTask(url, res, req) {
  let ids = findIds();
  let noTaskFound = true;
  ids.forEach((id) =>{
    if(url == "/tasks/:" + id){
      let taskUpload = tasks.filter((task) => task.id == id)
      res.end(JSON.stringify(taskUpload))
      noTaskFound = false;
    }
  })
  if (noTaskFound){
    res.end("No task found")
  }
}

function getImage(url, res, req){
        fs.readFile("images/cat.png", function (err, data) {
          if (err) throw err; // Fail if the file can't be read.
          res.writeHead(200, { "Content-Type": "image/png" });
          res.end(data); // Send the file data to the browser.
        });
}

function deleteTasks
(url, res, req) {
  let ids = findIds();
  let isDeleted = false;
  ids.forEach((id) => {
    if (url == "/tasks/:" + id) {
      tasks.forEach((task) => {
        if (task.id === id) {
          task.isDeleted = true;
        }
      })
      isDeleted = true;
    }
  })
  if (isDeleted) {
    res.end("Delete task successfully");
  } else {
    res.end("Run http://127.0.0.1:3001/tasks/: + id of task to delete task ");
  }
}

function postTasks(url) {
  if (url = "/tasks") {
    axios.post('/http://127.0.0.1:3001/tasks', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response);
      res.end("nah")
    })
    .catch(function (error) {
      console.log(error);
    });
  } else {
    res.end("Run http://127.0.0.1:3001/tasks with post to save task data on server");
  }
}

function putTasks(url, res, req) {
  let ids = findIds();
  let success = false;
  ids.forEach((id) => {
    if (url == "/tasks/:" + id) {

      success = true;
    }
  })
  if (success) {
    res.end("Put task successfully");
  } else {
    res.end("Run http://127.0.0.1:3001/tasks/: + id of task to put task ");
  }
}



