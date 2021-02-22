import React from "react";
import { Line } from "react-chartjs-2";

const ChartWeek = ({ values, height }) => {
  const dataset = {
    distance: Array.from({ length: 7 }, () => 0),
    time: Array.from({ length: 7 }, () => 0),
    avgSpeed: Array.from({ length: 7 }, () => 0),
  };

  values.forEach((ele) => {
    const day = ele.day ? ele.day - 1 : 6;
    dataset.distance[day] = ele.distance;
    dataset.time[day] = ele.time;
    dataset.avgSpeed[day] = ele.avg_speed;
  });

  const chartData = {
    labels: ["월", "화", "수", "목", "금", "토", "일"],
    datasets: [
      {
        yAxisID: "distance",
        label: "거리",
        data: dataset.distance,
        fill: false,
        backgroundColor: "#ffbf00",
        borderColor: `#ffbf00${height ? "" : 50}`,
      },
      {
        yAxisID: "time",
        label: "시간",
        data: dataset.time,
        fill: false,
        backgroundColor: "#f56c8c",
        borderColor: `#f56c8c${height ? "" : 50}`,
      },
      {
        yAxisID: "avgSpeed",
        label: "평균 속도",
        data: dataset.avgSpeed,
        fill: false,
        backgroundColor: "#44a2eb",
        borderColor: `#44a2eb${height ? "" : 50}`,
      },
    ],
  };

  const scales = {
    yAxes: [
      {
        id: "distance",
        display: height,
        scaleLabel: {
          display: true,
          labelString: "거리(km)",
        },
        gridLines: {
          display: false,
        },
        ticks: {
          // min: -5000,
          max: (Math.max.apply(null, dataset.distance) * 4) / 1,
          // stepSize: 5000,
        },
      },
      {
        id: "time",
        display: height,
        scaleLabel: {
          display: true,
          labelString: "시간(분)",
        },
        gridLines: {
          display: false,
        },
        ticks: {
          // min: -50,
          max: (Math.max.apply(null, dataset.time) * 4) / 2,
          //   stepSize: 20,
        },
      },
      {
        id: "avgSpeed",
        display: height,
        scaleLabel: {
          display: true,
          labelString: "평균 속도(km/h)",
        },
        gridLines: {
          display: false,
        },
        ticks: {
          // min: -30,
          max: (Math.max.apply(null, dataset.avgSpeed) * 4) / 3,
          //   stepSize: 20,
        },
      },
    ],
  };

  const tooltips = {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function(tooltipItem, data) {
        const idx = tooltipItem.datasetIndex;
        let label = data.datasets[idx].label || "";

        const unit = [" km", " 분", " km/h"];
        if (label) {
          label += `: `;
        }
        label += Math.round(tooltipItem.yLabel * 100) / 100 + unit[idx];
        return label;
      },
    },
  };

  const options = {
    legend: {
      display: height,
      align: "end",
      labels: {
        boxWidth: 12,
      },
    },
    tooltips,
    scales,
  };

  return <Line data={chartData} height={height || 65} options={options}></Line>;
};

export default ChartWeek;
