const mongoose = require('mongoose')

const { Schema } = mongoose;

const projectSchema = new Schema({

    projectName: {
        type: String,
        required: true,
    },

    taskList: {
        type: [{
            taskName: {
                type: String,
                required: true
            },
            isDone:{
                type: Boolean,
                default: false
            }

        }],
        required: true
    },

    memberList: {
        type: [{
            memberName: {
                type : String,
                required: true
            },
            isKicked:{
                type: Boolean,
                default : false
            },
            isLeader : {
                type: Boolean,
                default: false
            }
        }],
        required: true
    },

    isDeleted: {
        type: Boolean,
        default: false
    }

})


const Project = mongoose.model('projects', projectSchema);

module.exports = Project