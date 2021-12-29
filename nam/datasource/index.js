const FileSystemDataSource = require('./file-system.datasource');

const databaseFolder = '../database/';


const DBCollections = {
    user: 'users.json',
    task: 'tasks.json',
}

const fileSystemDataSource = new FileSystemDataSource(databaseFolder);

module.exports = {DBCollections, fileSystemDataSource};