const http = require('http')
const mongoose = require('mongoose')
const router = require('./router')
const redisClient = require('./core/connectors/redis')
const cron = require('./cron/updateCacheCron')
require('dotenv').config()

const server = http.createServer((request, response) => {
  const controller = router.route(request, response)
  controller(request, response)
})
server.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}/`)
})

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('we are connected!')
})

redisClient.connect()

cron.getTasks()[0].start()
