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

export const requestAddress = async (lat, lng) => {
  // const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`;
  const response = await API.get("/address", {
    params: {
      lat,
      lng,
      api_key: process.env.REACT_APP_GOOGLE_MAP_KEY,
    },
  });
  return response.data;
};
