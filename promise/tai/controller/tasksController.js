const fs = require("fs");
const { DBCollections, fileSystemDataSource } = require("../datasources/index.js");
const tasks = fileSystemDataSource.readCollection(DBCollections.task);
const tasksController = {
  getTasks,
  addTask,
  editTask,
  deleteTask,
};

function getTasks(response, request) {
  tasks.then(data =>{
    response.end(JSON.stringify(data));
  }).catch(error => {
    console.log(error);
  })
}

function getTask(response, request) {
  // let ids = findIds();
  // let noTaskFound = true;
  // ids.forEach((id) =>{
  //   if(url == "/tasks/:" + id){
  //     let taskUpload = tasks.filter((task) => task.id == id)
  //     res.end(JSON.stringify(taskUpload))
  //     noTaskFound = false;
  //   }
  // })
  // if (noTaskFound){
  //   res.end("No task found")
  // }
}

function deleteTask(response, request) {
  tasks.then(data =>{
    data.forEach((task) => {
      task.isDeleted = true;
    })
    fileSystemDataSource.updateCollection(DBCollections.task, tasks);
    response.end("Successful");
  }).catch(error => {
    console.log(error);
    response.end("error");
  })
}

function addTask(response, request) {
  // let data = "";
  // req.on('data', chunk => {
  //   data += chunk;
  // })
  // req.on('end', () => {
  //   tasks.push(JSON.parse(data));

  //   return "Post successfully"
  // })
}

function editTask(res) {
  
}


module.exports = tasksController;