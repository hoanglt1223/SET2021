const BaseRepository = require("./index");
const datasource = require('../datasource/index');

function ImageRepository() {
    BaseRepository.call(this, datasource.DBCollection.image);
}

module.exports = ImageRepository;
