import axios from "./axios";
import { API_URL } from "../constants";

const TODO_ENDPOINT = `${API_URL}/tasks`;

async function findAll() {
  const response = await axios.get(TODO_ENDPOINT);

  return response.data;
}

async function create(newTodo) {
  await axios.post(TODO_ENDPOINT, newTodo);
}

async function updateById(id, newTodo) {
  await axios.patch(`${TODO_ENDPOINT}?id=${id}`, newTodo);
}

const todoApis = { findAll, create, updateById };

export default todoApis;
