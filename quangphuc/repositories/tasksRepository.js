const {loadData, storeData} = require("../datasource");


const TasksRepository = function () {
  this.getAll = () => {
    return loadData('tasks');
  }
  this.getById = (id) => {
    const tasks = loadData('tasks');
    return tasks.find((task) => task.id === id);
  }

  this.deleteById = (id) => {
    let tasks = loadData('tasks');
    const task = tasks.find((task) => task.id === id);
    if(task) {
      tasks = tasks.filter((task) => task.id !== id);
      storeData(tasks, 'tasks');
      return true;
    } else {
      return false;
    }
  }

  this.updateById = (id, updatedTask) => {
    let tasks = loadData('tasks');
    let task = tasks.find((task) => task.id === id);
    if(task) {
      const index = tasks.findIndex((task) => task.id === id);
      tasks[index] = { ...task, ...updatedTask };
      tasks.forEach((item) => {
        if (item.id === task.id) {
          item = task;
        }
      });
      storeData(tasks, 'tasks');
      return true;
    } else {
      return false;
    }

  }

  this.updateAll = () => {

  }

  this.create = (newTask) => {
    let tasks = loadData('tasks');
    const task = tasks.find((task) => task.id === newTask.id);
    if(!task) {
      tasks.push(newTask);
      storeData(tasks, 'tasks');
      return true;
    } else {
      return false;
    }

  }
}

const tasksRepository = new TasksRepository();
module.exports = tasksRepository;