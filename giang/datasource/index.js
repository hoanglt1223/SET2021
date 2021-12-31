const fs = require("fs");
const path = require("path");

const DATA_FILE_PATH = "../database";

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
    console.log("Update data success");
  });
}

// function updateDataFromDB(dbCollection, id, newData) {
//   const dbPath = `${DATA_FILE_PATH}/${dbCollection}.json`;
//   const rawAllData = fs.readFileSync(dbPath);
//   const allData = JSON.parse(rawAllData);

//   const updatedAllData = Array.isArray(allData)
//     ? allData.map((item) => {
//         if (item.id === id) {
//           return {
//             ...item,
//             ...newData,
//           };
//         }

//         return item;
//       })
//     : [];

//   fs.writeFile(dbPath, JSON.stringify(updatedAllData), () => {
//     console.log("Update data success");
//   });
// }

module.exports = dataSource;
