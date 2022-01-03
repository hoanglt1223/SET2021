const { getPathAndQuery } = require("../utilities");
const getRequestBody = require('../interceptors/getRequestBody')
const fs = require("fs");
const path = require('path')
const {loadData} = require("../datasource");
const tasksRepository = require("../repositories/tasksRepository");
let tasks = loadData('tasks');

const TaskController = function () {
  this.getAllTasks = (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(tasksRepository.getAll()));
  };

  this.getTaskById = (req, res) => {
    const { path, query } = getPathAndQuery(req);
    const task = tasksRepository.getById(path[1]);
    if (task) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(task));
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("Task not found");
    }
  };

  this.addTask = async (req, res) => {
    const body = await getRequestBody(req);
    const createTask = tasksRepository.create(body);
    if (!createTask) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("Invalid request");
    } else {
      res.statusCode = 204;
      res.end();
    }
  };

  this.deleteTaskById = (req, res) => {
    const { path, query } = getPathAndQuery(req);
    const deleteTask = tasksRepository.deleteById(path[1]);
    if (deleteTask) {
      res.statusCode = 204;
      res.end();
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("Invalid request/Not successful");
    }
  };

  this.updateTaskById = async (req, res) => {
    const { path, query } = getPathAndQuery(req);
    const body = await getRequestBody(req);
    let updateTask = tasksRepository.updateById(path[1], body);
    if (updateTask) {
      res.statusCode = 204;
      res.end();
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("Invalid request");
    }
  };
};

module.exports = TaskController;
