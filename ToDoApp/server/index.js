// const http = require('http')
const express = require('express');
const mongoose = require('mongoose')
const {route} = require('./routers')

const hostname = "localhost"
const port = "5500"

const uriDB = "mongodb+srv://thanhtailt1223:tailt1007@cluster0.mv93c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(uriDB);

const connection = mongoose.connection

connection
    .on('connected', () => {
        console.log('Connected Database');
    })
    .on('disconnected', () => {
        console.log('Disconnect Database');
    })
    .on('error', (error) => {
        console.log('Error: ', error);
    })

// const server = http.createServer((request, response) => {
//     response.statusCode = 200;
//     response.setHeader("Access-Control-Allow-Origin", "*");
//     response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH,  OPTIONS");
//     console.log(request.method);
//     // let controller  = route(request);
//     // // response.end(`Server at http://${hostname}:${port}`);
//     // controller(request, response);
// })
const server = express();
server.all('/', (request, response) => {
    console.log(request.method)
    response.statusCode = 200;
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH,  OPTIONS");
    response.send('hi');
})

server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})
