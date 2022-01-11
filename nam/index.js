const http = require('http');
const router = require('./routers')
const mongoose = require('mongoose');
const port = 8080;
const uri_mongoDB = 'mongodb+srv://hqnam:Hqnam1711@hqnam.ja5is.mongodb.net/test';

mongoose.connect(uri_mongoDB);

let connection = mongoose.connection;
connection.on('error', () => {
    console.log(`Error to connect ${uri_mongoDB}`);
});

connection.on('connected', () => {
    console.log('Connected to ', uri_mongoDB);
})

connection.on('disconnected', () => {
    console.log('Disconnected to ', uri_mongoDB)
})

const server = http.createServer((request, response) => {
    const controller = router.route(request)
    controller(request, response)
})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
