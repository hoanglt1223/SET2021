const { DBCollection } = require("../constants");
const dataSource = require("../datasource");

const dbCollection = DBCollection.TASK;

const taskRepository = {
  create,
};

function create(newTask) {
  const tasks = dataSource.get(dbCollection);
  const updatedTasks = [...tasks, newTask];

  dataSource.update(dbCollection, updatedTasks);

  return updatedTasks;
}

module.exports = taskRepository;
