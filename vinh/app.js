const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;
const task = [
    {
        id: '1',
        taskName: 'Học Javascript',
        isComplete: false
    },
    {
        id: '2',
        taskName: 'Học HTML',
        isComplete: false
    },
    {
        id: '3',
        taskName: 'Học Node JS',
        isComplete: false
    }
]
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  let queryString = url.parse(req.url, true).query;

  if(req.url =='/task' && req.method == 'GET'){ //get list task
      res.write(JSON.stringify(task));
      console.log(queryString);
  }else if(typeof queryString.id !== "undefined" && req.method == 'GET') {//get task by id
    let taskList = task.filter((task) =>{
      return task.id == queryString.id;
    })
    res.write(JSON.stringify(taskList));
  }else{//nothing
    console.log('nothing')
  }
  
res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});