const Task = require('../Models/taskModel')
const database = require('../database')

module.exports = class TaskServices{
    static async createTask(data){
        try{
            const newTask = {
                taskName = data.taskName,
                taskDecription = data.taskDecription,
                isDelete = false
            }
            const response = await new Task(newTask).save();
            return response;
        }catch(error){
            console.log(`Can not create new task ${error}`);
        }
    }
    static async getAllTask(){
        try{
            const allTasks = await Task.find();
            return allTasks;
        } catch(error){
            console.log(`Can not load task ${error}`);
        }
    }
    static async getTaskById(taskId){
        try{
            const taskById = await Task.findById({_id: taskId});
            return taskById;
        }catch(error){
            console.log(`Task not found ${error}`)
        }
    }
    static async deleteTaskById(taskId){
        try{
            const taskDeleteById = await Task.findOneAndDelete(taskId);
            return taskDeleteById;
        }catch(error){
            console.log(`Could not delete task ${error}`);
        }
    }
}
