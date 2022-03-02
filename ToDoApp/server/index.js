const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const { router } = require('./routers')
require('dotenv').config();
const  logger  = require('./loggingServer/index')
const hostname = "localhost"
const port = "5500"


mongoose.connect(process.env.NODE_ENV === 'staging' ? process.env.MONGODB_URL : '' );


const connection = mongoose.connection

connection
    .on('connected', () => {
        logger.info('Connected Database')
    })
    .on('disconnected', () => {
        logger.warn('Disconnect Database');
        
    })
    .on('error', (error) => {
        logger.error(error)
    })

const server = express();

server.use(cors())

server.use(router);


server.listen(port, () => {
    logger.info(`Server running at http://${hostname}:${port}`);
})
