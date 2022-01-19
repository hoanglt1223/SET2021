import axios from "./axios";
import { API_URL } from "../constants";

const TASK_ENDPOINT = `${API_URL}/tasks`;

async function findAll() {
  const response = await axios.get(TASK_ENDPOINT);

  return response.data;
}

async function create(newTask) {
  await axios.post(TASK_ENDPOINT, newTask);
}

const taskApis = { findAll, create };

export default taskApis;
