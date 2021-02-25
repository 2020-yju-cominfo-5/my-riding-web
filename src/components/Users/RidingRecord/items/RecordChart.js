import React from "react";
import { Line } from "react-chartjs-2";

const ChartWeek = ({ values, height, label }) => {
  const CHART_OPACITY = 20;
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

  const getChart = {
    datasets: (id, labelName, color) => {
      const currentColor =
        !label || label === id ? color : `${color}${CHART_OPACITY}`;

      return {
        yAxisID: id,
        label: labelName,
        data: dataset[id],
        fill: false,
        backgroundColor: currentColor,
        borderColor: currentColor,
      };
    },
    yAxes: (id, labelString, maxTick) => {
      return {
        id,
        scaleLabel: {
          display: true,
          labelString,
          fontStyle: label === id && "bold",
        },
        gridLines: {
          display: label === id,
        },
        ticks: {
          max: (Math.max.apply(null, dataset[id]) * 5) / maxTick,
          fontStyle: label === id && "bold",
        },
      };
    },
  };

  const chartData = {
    labels: ["월", "화", "수", "목", "금", "토", "일"],
    datasets: [
      getChart.datasets("distance", "거리", "#ffbf00"),
      getChart.datasets("time", "시간", "#f56c8c"),
      getChart.datasets("avgSpeed", "평균 속도", "#44a2eb"),
    ],
  };

  const callbacks = {
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
  };

  const options = {
    legend: {
      display: height,
      align: "end",
      labels: {
        boxWidth: 12,
      },
    },
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks,
    },
    scales: {
      yAxes: [
        getChart.yAxes("distance", "거리(km)", 2),
        getChart.yAxes("time", "시간(분)", 3),
        getChart.yAxes("avgSpeed", "평균 속도(km/h)", 4),
      ],
    },
  };

  return <Line data={chartData} height={height || 65} options={options}></Line>;
};

export default ChartWeek;
