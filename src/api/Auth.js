import axios from "axios";

const url = `http://54.145.82.27/api`;

export const requestSignup = async (data) => {
  const response = await axios.post(`${url}/signup`, data);
  return response.data;
};

// TODO  헤더에 토큰정보 추가 전송
export const requestLogin = async (data) => {
  const response = await axios.post(`${url}/login`, data);
  return response.data;
};
