import axios from './axios'
import { API_URL } from '../constants'

const AUTH_ENDPOINT = `${API_URL}/auth`

async function login(username, password) {
  const response = await axios.post(`${AUTH_ENDPOINT}/login`, {
    username,
    password
  })

  return response.data
}

async function getMe() {
  const response = await axios.post(`${AUTH_ENDPOINT}/me`)

  return response.data
}

async function register(username, password) {
  const response = await axios.post(`${AUTH_ENDPOINT}/register`, {
    username,
    password
  })

  return response.data
}

const authApis = { login, getMe, register }

export default authApis
