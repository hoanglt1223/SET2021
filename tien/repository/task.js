const BaseRepository = require("./index");
const datasource = require('../datasource/index');

function TaskRepository() {
    BaseRepository.call(this, datasource.DBCollection.task);
}

module.exports = TaskRepository;
