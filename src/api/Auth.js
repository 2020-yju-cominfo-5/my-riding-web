import API from "./API";

export const requestSignup = async (data) => {
  const response = await API.post("/auth/signup", data);
  return response.data;
};

export const requestLogin = async (data) => {
  const response = await API.post("/auth/login", data);
  return response.data;
};

export const requestLogout = async () => {
  const response = await API.post("/auth/logout");
  return response.data;
};

export const requestAuth = async () => {
  const response = await API.get("/auth");
  return response.data;
};

export const getProfile = async () => {
  const response = await API.get("/auth/profile");
  return response.data;
};
