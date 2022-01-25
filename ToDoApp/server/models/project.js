const mongoose = require('mongoose')

const {Schema} = mongoose;

const projectSchema = new Schema({

})


const Project = mongoose.model('projects', projectSchema);

module.exports = Project
