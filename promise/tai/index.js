
const { handleError } = require('./helpers')
const http = require('http');
const router = require('./router')
require("dotenv").config;
const mongoose = require('mongoose');
const password = process.env.PASSWORD;
mongoose.connect(`mongodb+srv://thanhtailt1223:tailt1007@cluster0.mv93c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
const db = mongoose.connection;
//Bắt sự kiện error
db.on('error', function(err) {
  if (err) console.log(err)
});
//Bắt sự kiện open
db.once('open', function() {
  //Khởi tạo Schema
  console.log("Ket noi thanh cong")
});

const port = 8080

const server = http.createServer((request, response) => {
    const controller = router.route(request)
    controller(request, response)
})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});




