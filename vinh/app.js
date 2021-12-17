const http = require('http');

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

  if(req.url =='/task' && req.method == 'GET'){
      res.write(JSON.stringify(task));
      console.log(req.query);
      res.end();
  } if(req.param('id')){
      
  }
   else{
    res.end('Hello World');
    console.log(req);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});