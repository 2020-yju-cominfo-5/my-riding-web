import axios from "axios";

const baseURL = `http://54.145.82.27/api`;

export const axiosInstance = axios.create({
  baseURL,
});

export const authAxiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
  baseURL,
});
