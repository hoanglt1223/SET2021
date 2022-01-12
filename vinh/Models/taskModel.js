const mongoose = require('mongoose');
const database = require('../database');

var taskSchema = mongoose.Schema({
    taskName: {
        type: String,
        require: true
    },
    taskDecription:{
        type: String,
        require: false
    },
    isDelete: Boolean
})

var Task = mongoose.model('Task', taskSchema);
module.exports = Task;