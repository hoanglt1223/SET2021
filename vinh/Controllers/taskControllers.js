const TaskServices = require('../Middlewares/TaskServices');

module.exports = class Task{
    static async apiGetAllTask(request, response){
        try{
            const tasks = TaskServices.getAllTask();
            if(!task){
                response.status(404).json("There are no task"); //client error
            }

            response.json(tasks);
        } catch(error){
            response.status(500).json({error:error}); //server error
        }
    }
    static async apiGetTaskByid(request, response){
        try{
            let taskId = request.params.id;
            const task = await TaskServices.getTaskById(taskId);
            response.json(task);
        }catch(error){
            response.status(500).json({error:error});
        }
    }
    static async apiCreateTask(request, response){
        try{
            const newTask = await TaskServices.createTask(request.body);
            response.json(newTask);
        }catch(error){
            response.status(500).json({error: error});
        }
    }
    static async apiDeleteTaskById(request, response){
        try{
            const taskId = request.params.id;
            const deleteTask = await TaskServices.deleteTaskById(taskId);
            response.json(deleteTask)
        }catch (error){
            response.status(500).json({error: error});
        }
    }
}