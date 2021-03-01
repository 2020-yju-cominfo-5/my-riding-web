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

// FIXME 프로필 사진 변경 API 추가
//   1. post -> put 또는 patch 로 변경
//   2. /auth/update/img 로 url 변경
export const updateProfileImg = async (data) => {
  const resposne = await API.post("/auth/update/image", data);
  return resposne.data;
};

// FIXME 패스워드 변경 API 추가
//   1. post -> put 또는 patch 로 변경
//   2. /auth/update/password 로 url 변경
export const updatePassword = async (data) => {
  const resposne = await API.patch("/auth/update/password", data);
  return resposne.data;
};
