import axios from './axios'
import { API_URL } from '../constants'

const TODO_ENDPOINT = `${API_URL}/tasks`

async function findAll(creatorId) {
  const filter = {
    where: {
      creatorId
    }
  }

  const response = await axios.get(`${TODO_ENDPOINT}?filter=${JSON.stringify(filter)}`)

  return response.data
}

async function create(newTodo) {
  await axios.post(TODO_ENDPOINT, newTodo)
}

async function updateById(id, newTodo) {
  await axios.patch(`${TODO_ENDPOINT}?id=${id}`, newTodo)
}

async function deleteById(id) {
  await axios.delete(`${TODO_ENDPOINT}?id=${id}`)
}

const todoApis = { findAll, create, updateById, deleteById }

export default todoApis
