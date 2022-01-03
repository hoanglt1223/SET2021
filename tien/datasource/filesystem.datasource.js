const fs = require("fs");

const datasource = {
    readData,
    writeData
}

function readData(filePath) {
  return fs.readFile(filePath, "utf8", (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      return;
    }
    try {
      const tasksList = JSON.parse(jsonString);
      return tasksList;
    } catch (err) {
      console.log("Error parsing JSON string:", err);
      return false;
    }
  });
}

function writeData(filePath, data) {
    fs.writeFile(filePath, data, (err) => {
        if (err) {
            console.log("Error writting file:", err);
            return;
        }
        console.log("JSON data is saved.");
    });
}

module.exports = datasource;
