const mongoose = require('mongoose');

const conn = mongoose.connect('mongodb+srv://quangvinh:Vinh18061989@cluster0.qdk3y.mongodb.net/test')
.then(()=>{
    console.log('Database connected successfully');
})
.catch((error)=>{
    console.log(`Error connecting to database ${error}`);
})

module.exports = conn;