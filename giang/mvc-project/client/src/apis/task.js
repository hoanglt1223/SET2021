import axios from "axios";
import { API_URL } from "../constants";

export async function getTasksData() {
  const response = await axios.get(`${API_URL}/tasks`);

  return response.data;
}
