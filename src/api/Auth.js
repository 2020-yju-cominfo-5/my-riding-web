import { axiosInstance, authAxiosInstance } from "./Axios";

export const requestSignup = async (data) => {
  const response = await axiosInstance.post("/auth/signup", data);
  return response.data;
};

export const requestLogin = async (data) => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data;
};

export const requestLogout = async () => {
  const response = await authAxiosInstance.post("/auth/logout");
  return response.data;
};

// TODO 회원정보 반환받아서 로그인된 유저랑 일치한지 확인 로직 추가
export const requestAuth = async () => {
  const response = await authAxiosInstance.get("/auth");
  return response.data;
};
