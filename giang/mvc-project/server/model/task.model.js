const mongoose = require("mongoose");
const { DBCollection } = require("../constants");
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  isAdminCreated: Boolean,
  isDeleted: Boolean,
  creatorId: {
    type: String,
    required: true,
  },
});

const Task = mongoose.model(DBCollection.TASK, taskSchema);

module.exports = Task;
