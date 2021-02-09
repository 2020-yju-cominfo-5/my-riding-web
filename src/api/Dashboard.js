import axios from "axios";

const url = `http://54.145.82.27/api`;

// TODO  헤더에 토큰정보 추가 전송
export const getDashboardContent = async () => {
  const response = await axios.get(`${url}/dashboard`);
  return response.data;
};
