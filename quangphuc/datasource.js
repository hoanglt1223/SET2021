const fs = require('fs')
const path = require("path");

const storeData = (data, filename) => {
  fs.writeFile(path.join(__dirname, 'db', filename + '.json'), JSON.stringify(data), (err) => {
    if (err) {
      throw err;
    }
  })
}

const loadData = (filename) => {
  let data = fs.readFileSync(path.join(__dirname, './db', filename + '.json'))
  return JSON.parse(data);
}

module.exports = {
  storeData,
  loadData
}