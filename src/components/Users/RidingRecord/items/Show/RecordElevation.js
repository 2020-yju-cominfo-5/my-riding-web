import React from "react";
import { Bar } from "react-chartjs-2";
import useMouseLeave from "../../../../../hooks/useMouseLeave";

const ChartElevation = ({ graphData, setPosition, height }) => {
  const callbacks = {
    label: function(tooltipItem, data) {
      const idx = tooltipItem.datasetIndex;
      let label = data.datasets[idx].label || "";

      if (label) {
        label += `: `;
      }
      label += Math.round(tooltipItem.yLabel * 100) / 100 + "m";
      return label;
    },
  };

  const onHover = (event, chartElement) => {
    const element = chartElement[0];
    if (!element) {
      return;
    }

    const chartEventIndex = element["_index"];
    const position = graphData.locations[chartEventIndex];
    setPosition(position);
  };

  const options = {
    responsive: true,
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks,
    },
    events: ["mousemove"],
    onHover,
    legend: {
      display: false,
    },
  };

  const Graph = useMouseLeave(() => {
    setPosition();
  });

  return (
    <Bar
      data={graphData}
      height={height || 75}
      options={options}
      ref={Graph}
    ></Bar>
  );
};

export default ChartElevation;
