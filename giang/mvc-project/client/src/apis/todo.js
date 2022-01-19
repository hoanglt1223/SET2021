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

const todoApis = { findAll, create };

export default todoApis;
