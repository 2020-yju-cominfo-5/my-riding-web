import API from "./API";

export const getDashboard = async () => {
  const response = await API.get("/dashboard");
  return response.data;
};
