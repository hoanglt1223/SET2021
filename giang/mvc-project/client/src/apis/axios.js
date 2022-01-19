import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      // "Content-Type": "application/json",
    },
  };
});

export default axiosInstance;
