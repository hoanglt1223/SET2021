const datasource = require("./filesystem.datasource")

const databasePath = "./database"
const DBCollection = {
    task: databasePath + '/task.json',
    image: databasePath + '/image.json',
}

module.exports = {DBCollection, datasource};