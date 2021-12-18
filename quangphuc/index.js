const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const path = req.url.split('?')[0];
    if(/\/tasks/g.test(path)) {
        console.log('task page');
    } else if(/\/image/g.test(path)){
        console.log('image page');
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});