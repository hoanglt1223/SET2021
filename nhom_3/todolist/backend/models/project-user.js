const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectUserSchema = new Schema({
  projectId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const ProjectUsers = mongoose.model("projectUsers", projectUserSchema);

module.exports = ProjectUsers;
