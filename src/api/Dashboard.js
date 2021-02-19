import API from "./API";

const url = `http://54.145.82.27/api`;

export const getDashboard = async () => {
  const response = await API.get(`${url}/dashboard`);
  return response.data;
};
