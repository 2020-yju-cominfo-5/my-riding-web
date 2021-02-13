import { axiosInstance, authAxiosInstance } from "./Axios";

export const requestSignup = async (data) => {
  const response = await axiosInstance.post("/signup", data);
  return response.data;
};

export const requestLogin = async (data) => {
  const response = await axiosInstance.post("/login", data);
  return response.data;
};

export const requestLogout = async () => {
  const response = await authAxiosInstance.post("/logout");
  return response.data;
};

// FIXME 인증 API URL 수정 필요
export const requestAuth = async () => {
  const response = await authAxiosInstance.post("/auth");
  return response.data;
};
