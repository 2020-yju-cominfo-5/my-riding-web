import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete API.defaults.headers.common.Authorization;
    }
    return config;
  },

  (error) => Promise.reject(error),
);

export default API;
