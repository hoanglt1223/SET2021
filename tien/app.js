const http = require('http');
require('dotenv').config();
const axios = require('axios');



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
function findIds() {
  let ids = [];
  tasks.forEach((task) => {
    if (!task.isDeleted) {
      ids.push(task.id);
    }
  })
  return ids;
}

function handleGet(url, res, req) {
  let ids = findIds();
  let getStarted = false;
  if (url === "/people") {
    return res.end(JSON.stringify(tasks));
  } else {
    ids.forEach((id) => {
      if (url == "/people/:" + id) {
        let taskUpload = tasks.filter((task) => {
          return task.id === id;
        })
        res.end(JSON.stringify(taskUpload));
      } else if (url !== "/people" && url !== "/people/:" + id) {
        getStarted = true;
      }
    })
  }
}

function handleDelete(url, res, req) {
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

function handlePost(url, res, req) {
  if (url = "/tasks") {
    axios
      .post('http://127.0.0.1:3001/tasks', {
        todo: 'Buy the milk'
      })
      .then(res => {
        console.log(`statusCode: ${res.status}`)
        console.log(res)
      })
      .catch(error => {
        console.error(error)
      })

  } else {
    res.end("Run http://127.0.0.1:3001/tasks with post to save task data on server");
  }
}

function handlePut(url, res, req) {
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

const routers = {
    GET: handleGet,
    POST: handlePost,
    PUT: handlePut,
    DELETE: handleDelete
}

// define server  
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});





