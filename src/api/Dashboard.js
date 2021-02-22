import API from "./API";

export const getDashboard = async () => {
  const response = await API.get("/dashboard");
  return response.data;
};

// TODO 대쉬보드 라이딩 요약 요청
export const getDashboardStat = async ({ year, week }) => {
  console.log("대쉬보드 라이딩 요약 요청", year, week);
};
