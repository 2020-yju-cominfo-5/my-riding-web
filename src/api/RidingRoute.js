import API from "./API";

export const getRidingRouteList = async () => {
  const response = await API.get("/route");
  return response.data;
};

export const getRidingRouteById = async (id) => {
  const response = await API.get(`/route/${id}`);
  return response.data;
};
