
import axios from "axios";

const url = `http://3.87.124.186/api`;

// TODO  헤더에 토큰정보 추가 전송
export const getDashboardContent = async () => {
  const response = await axios.get(`${url}/dashboard`);
  return response.data;
};
