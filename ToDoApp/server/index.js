const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const { router } = require('./routers')

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

const server = express();

server.use(cors())
server.use(router);

// server.all('/*', (request, response) => {
//     response.setHeader("Access-Control-Allow-Origin", "*");
//     response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
//     let controller = route(request);
//     controller(request, response)
// })

server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})
