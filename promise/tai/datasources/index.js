const FileSystemDataSource = require('./file-system.datasource')
require('dotenv').config();
const database = './database'

let password = process.env.PASSWORD;

let mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://thanhtailt1223:${password}@cluster0.mv93c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
let db = mongoose.connection;
//Bắt sự kiện error
db.on('error', function(err) {
  if (err) console.log(err)
});
//Bắt sự kiện open

db.once('open', function() {
  //Khởi tạo Schema
  console.log("Ket noi thanh cong")
});
const DBCollections = {
    user: 'users',
    task: 'tasks'
}

const fileSystemDataSource = new FileSystemDataSource(database)

module.exports = { DBCollections, fileSystemDataSource }