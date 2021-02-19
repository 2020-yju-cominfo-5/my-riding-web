import API from "./API";

const url = `${process.env.REACT_APP_SERVER_URL}/route`;

export const getRidingRouteList = async () => {
  const response = await API.get(`${url}`);
  return response.data;
};

export const getRidingRouteById = async (id) => {
  const response = await API.post(`${url}/${id}`);
  return response.data;
};
