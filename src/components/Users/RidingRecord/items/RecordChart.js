import React from "react";
import { Line } from "react-chartjs-2";

const ChartWeek = ({ values }) => {
  const dataset = {
    distance: Array.from({ length: 7 }, () => 0),
    time: Array.from({ length: 7 }, () => 0),
    avgSpeed: Array.from({ length: 7 }, () => 0),
  };

  values.forEach((ele) => {
    dataset.distance[ele.day] = (ele.distance / 1000).toFixed(1);
    dataset.time[ele.day] = ele.time;
    dataset.avgSpeed[ele.day] = ele.avg_speed;
  });

  // TODO chart data 차이를 보정하는 알고리즘 추가 빌요
  const chartData = {
    labels: ["일", "월", "화", "수", "목", "금", "토"],
    datasets: [
      {
        label: "거리",
        data: dataset.distance,
        fill: false,
        backgroundColor: "#ffbf00",
        borderColor: "#ffbf0070",
      },
      {
        label: "시간",
        data: dataset.time,
        fill: false,
        backgroundColor: "#f56c8c",
        borderColor: "#f56c8c70",
      },
      {
        label: "평균 속도",
        data: dataset.avgSpeed,
        fill: false,
        backgroundColor: "#44a2eb",
        borderColor: "#44a2eb70",
      },
    ],
  };
  const options = {
    legend: {
      display: false,
    },
  };
  return <Line data={chartData} height={65} options={options}></Line>;
};

export default ChartWeek;
