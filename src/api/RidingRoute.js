import API from "./API";

export const getRidingRouteList = async () => {
  const response = await API.get("/route");
  return response.data;
};

export const getRidingRouteById = async (id) => {
  const response = await API.get(`/route/${id}`);
  return response.data;
};

export const getRidingRoutePathById = async (id) => {
  const response = await API.get(`/route/path/${id}`);
  return response.data;
};

export const deleteRidingRouteById = async (id) => {
  const response = await API.delete(`/route/${id}`);
  return response.data;
};

export const requestCreateRidingRoute = async (data) => {
  const response = await API.post("/route", data);
  return response.data;
};
