import axios from "axios";

const url = `${process.env.REACT_APP_SERVER_URL}/record`;

// TODO 바디에 year 추가하기
export const getRidingRecordByYear = async (year) => {
  const response = await axios.get(`${url}/year`);
  return response.data;
};

// TODO 바디에 year, week 추가하기
export const getRidingRecordByWeek = async (week) => {
  const response = await axios.get(`${url}/week/${week}`);
  return response.data;
};

export const getRidingRecordById = async (id) => {
  const response = await axios.get(`${url}/${id}`);
  return response.data;
};
