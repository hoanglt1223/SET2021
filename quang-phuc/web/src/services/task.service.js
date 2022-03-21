import Task from '../models/task.model'

function TaskService(restConnector) {
  this.restConnector = restConnector

  this.getAllTasks = async () => {
    const { data } = await this.restConnector.get(`/tasks`)
    return data.map(
      (data) => new Task(data._id, data.taskName, data.owner, data.project, new Date(data.createdAt), data.isDone)
    )
  }

  this.getTasksOfProject = async (projectId) => {
    const { data } = await this.restConnector.get(`/tasks?project=${projectId}`)
    return data.map(
      (data) => new Task(data._id, data.taskName, data.owner, data.project, new Date(data.createdAt), data.isDone)
    )
  }
  this.getTasksOfOwner = async (owner) => {
    const { data } = await this.restConnector.get(`/tasks?owner=${owner}`)
    return data.map(
      (data) => new Task(data._id, data.taskName, data.owner, data.project, new Date(data.createdAt), data.isDone)
    )
  }

  this.getTaskById = async (_id) => {
    const { data } = await this.restConnector.get(`/tasks/${_id}`)
    return data
      ? new Task(data._id, data.taskName, data.owner, data.project, new Date(data.createdAt), data.isDone)
      : undefined
  }

  this.createTask = async (task) => {
    const { data } = await this.restConnector.post(`/tasks`, task)
    return data
  }

  this.updateTaskById = async (_id, updateInformation) => {
    const { data } = await this.restConnector.patch(`/tasks/${_id}/update`, updateInformation)
    return data
  }

  this.deleteTaskById = async (_id) => {
    const { data } = await this.restConnector.delete(`/tasks/${_id}/delete`)
    return data
  }
}

export default TaskService
