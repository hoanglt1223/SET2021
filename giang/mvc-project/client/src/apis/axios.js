import axios from "axios";
import { AUTHORIZATION_KEY } from "../constants";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage?.getItem(AUTHORIZATION_KEY) ?? "";

  return {
    ...config,
    headers: {
      // "Content-Type": "application/x-www-form-urlencoded",
      "Content-Type": "application/json",
      // "Access-Control-Allow-Credentials": true,
      Authorization: `Bearer ${token}`,
    },
  };
});

export default axiosInstance;
