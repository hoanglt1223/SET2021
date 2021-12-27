const fs = require("fs");

const DATA_FILE_PATH = "../mock-data.json";

function updateTasksData(tasks) {
  fs.writeFile(
    DATA_FILE_PATH,
    JSON.stringify({
      tasks,
    }),
    () => {
      console.log("Update data success");
    }
  );
}

function getTasksData() {
  const rawData = fs.readFileSync(DATA_FILE_PATH);
  let data = JSON.parse(rawData);
  return data.tasks;
}

module.exports = { updateTasksData, getTasksData };
