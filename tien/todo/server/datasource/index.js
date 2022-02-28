const fs = require("fs");
const path = require("path");

const dataSource = {
  get: getAllDataFromDB,
  update: updateDataFromDB,
};

function getAllDataFromDB(dbCollection) {
  const dbPath = path.join(__dirname, `../database/${dbCollection}.json`);

  const rawAllData = fs.readFileSync(dbPath);
  const allData = JSON.parse(rawAllData);

  return allData;
}

function updateDataFromDB(dbCollection, newData) {
  const dbPath = path.join(__dirname, `../database/${dbCollection}.json`);

  fs.writeFile(dbPath, JSON.stringify(newData), () => {
    console.log("Update data successfully");
  });
}

module.exports = dataSource;