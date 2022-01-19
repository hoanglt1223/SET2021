const BaseRepository = require("./index");
const { DBCollection } = require("../constants");

function TaskRepository() {
  BaseRepository.call(this, DBCollection.TASK);
}

module.exports = TaskRepository;
