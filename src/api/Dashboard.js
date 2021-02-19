import { authAxiosInstance } from "./Axios";

const url = `http://54.145.82.27/api`;

export const getDashboard = async () => {
  const response = await authAxiosInstance.get(`${url}/dashboard`);
  return response.data;
};
