import axios from 'axios'
import { AUTHORIZATION_KEY } from '../constants'

const axiosInstance = axios.create()

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage?.getItem(AUTHORIZATION_KEY) ?? ''
  let customConfig = {
    ...config,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if (token) {
    customConfig.headers = {
      ...customConfig.headers,
      Authorization: `Bearer ${token}`
    }
  }

  return customConfig
})

axiosInstance.interceptors.response.use((response) => {
  if (response?.data?.error) {
    throw new Error(response?.data?.error)
  }

  return response
})

export default axiosInstance
