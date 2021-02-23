import API from "./API";

export const getRidingRecordByYear = async (year) => {
  const response = await API.get("/record/year", {
    params: {
      stat_year: year,
    },
  });
  return response.data;
};

// TODO 바디에 year, week 추가하기
export const getRidingRecordByWeek = async (year, week) => {
  const response = await API.get("/record/week", {
    params: {
      year,
      week,
    },
  });
  return response.data;
};

// TODO 백엔드 수정 현황 확인 필요
export const getRidingRecordById = async (id) => {
  const response = await API.get(`record/${id}`);
  return response.data;
};
