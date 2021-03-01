import API from "./API";

export const getDashboard = async () => {
  const response = await API.get("/dashboard");
  return response.data;
};

// TODO 대쉬보드 라이딩 요약 요청
export const getDashboardStat = async ({ year, week }) => {
  const response = await API.get("/dashboard/stat", {
    params: {
      year,
      week: parseInt(week),
    },
  });
  return response.data;
};

export const requestCheckNoti = async (id) => {
  const response = await API.patch(`/dashboard/notification/check/${id}`);
  return response.data;
};
