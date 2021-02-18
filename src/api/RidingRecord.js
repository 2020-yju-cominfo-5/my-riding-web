import axios from "axios";
import { authAxiosInstance } from "./Axios";

// const url = `${process.env.REACT_APP_SERVER_URL}/record`;
const url = `http://54.145.82.27/api/record`;

export const getRidingRecordByYear = async (year) => {
  const response = await authAxiosInstance.get(`${url}/year`, {
    params: {
      stat_year: year,
    },
  });
  return response.data;
};

// TODO 바디에 year, week 추가하기
export const getRidingRecordByWeek = async (year, week) => {
  const response = await authAxiosInstance.get(`${url}/week`, {
    params: {
      year,
      week,
    },
  });
  return response.data;
};

export const getRidingRecordById = async (id) => {
  const response = await authAxiosInstance.get(`${url}/${id}`);
  return response.data;
};
