import React from "react";
import { Bar } from "react-chartjs-2";

const ChartElevation = ({ graphData }) => {
  const options = {
    legend: {
      display: false,
    },
  };
  return <Bar data={graphData} height={75} options={options}></Bar>;
};

export default ChartElevation;
