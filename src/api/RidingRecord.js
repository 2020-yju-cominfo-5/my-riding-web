import API from "./API";

export const getRidingRecordByYear = async (year) => {
  const response = await API.get("/record/year", {
    params: {
      stat_year: year,
    },
  });
  return response.data;
};

export const getRidingRecordByWeek = async (year, week) => {
  const response = await API.get("/record/week", {
    params: {
      year,
      week,
    },
  });
  return response.data;
};

export const getRidingRecordById = async (id) => {
  const response = await API.get(`record/${id}`);
  return response.data;
};

// TODO 라이딩 이름 변경 api 연결
export const updateRidingRecordTitle = async (id, title) => {
  console.log(id, title);
  // const response = await API.patch(`record/${id}`);
  // return response.data;
};

export const deleteRidingRecordById = async (id) => {
  const response = await API.delete(`/record/${id}`);
  return response.data;
};
