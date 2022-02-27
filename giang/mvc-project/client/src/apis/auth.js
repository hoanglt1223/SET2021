import axios from "./axios";
import { API_URL } from "../constants";

const AUTH_ENDPOINT = `${API_URL}/auth`;

async function login(username, password) {
  const response = await axios.post(`${AUTH_ENDPOINT}/login`, {
    username,
    password,
  });

  if (response?.data?.error) {
    throw new Error(response?.data?.error);
  }

  return response.data;
}

async function getMe() {
  const response = await axios.post(`${AUTH_ENDPOINT}/me`);

  if (response?.data?.error) {
    throw new Error(response?.data?.error);
  }

  return response.data;
}

const authApis = { login, getMe };

export default authApis;
