const http = require('http')

const mongoose = require('mongoose')

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

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', "text/plain")
    response.end('Server')
})