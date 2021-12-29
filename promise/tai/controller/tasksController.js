const axios = require('axios');
const http = require('http');

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

const tasksController = {
  getTasks,
  postTasks,
  putTasks,
  deleteTasks,
  patchTasks
};

function findIds() {
  let ids = [];
  tasks.forEach((task) => {
    if (!task.isDeleted) {
      ids.push(task.id);
    }
  })
  return ids;
}

function getTasks(url, res) {
  if (url == "/tasks"){
    res.end(JSON.stringify(tasks));
  } else {
    getTask(url, res, req);
  }
}

function getTask(url, res) {
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

function deleteTasks
(url, res) {
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
    res.end("Invalid task");
  }
}

function postTasks(url, res, req) {
  if (url = "/tasks") {
    // axios.post('/http://127.0.0.1:3001/tasks', {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone'
    // })
    // .then(function (response) {
    //   console.log(response);
    //   res.end("nah")
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  let data = "";
  req.on('data', chunk => {
    data += chunk;
  })
  req.on('end', () => {
    tasks.push(JSON.parse(data));

    return "Post successfully"
  })
  } else {
    res.end("Run http://127.0.0.1:3001/tasks with post to save task data on server");
  }
}

function putTasks(url, res) {
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

function patchTasks(url, res){

}

module.exports = tasksController;