import React, { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const useClick = ({ onMouseEnterHandler, onMouseLeaveHandler }) => {
  if (
    typeof onMouseEnterHandler !== "function" ||
    typeof onMouseLeaveHandler !== "function"
  ) {
    return;
  }

  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { canvas } = element.current.chartInstance;
      canvas.addEventListener("mouseenter", onMouseEnterHandler);
      canvas.addEventListener("mouseleave", onMouseLeaveHandler);
      // element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        const { canvas } = element.current.chartInstance;
        canvas.removeEventListener("mouseenter", onMouseEnterHandler);
        canvas.removeEventListener("mouseleave", onMouseLeaveHandler);
      }
    };
  }, []);
  return element;
};

const ChartElevation = ({ graphData }) => {
  const tooltips = {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function(tooltipItem, data) {
        const idx = tooltipItem.datasetIndex;
        let label = data.datasets[idx].label || "";

        if (label) {
          label += `: `;
        }
        label += Math.round(tooltipItem.yLabel * 100) / 100 + "m";
        return label;
      },
    },
  };

  const onHover = (event, chartElement) => {
    if (chartElement[0]) {
      const chartEventIndex = chartElement[0]["_index"];
      const position = graphData.locations[chartEventIndex];

      console.log(position);
      // TODO 지도 객체 일치 시켜야 함!!!
      const markerOption = {
        position,
        map: graphData.map,
        icon: {
          url: "../img/marker/point.png",
          scaledSize: new window.google.maps.Size(30, 30),
          anchor: new window.google.maps.Point(15, 15),
        },
      };
      // console.log(prevMarker);
      let prevMarker;
      prevMarker = new window.google.maps.Marker(markerOption);
      prevMarker.setZIndex(100);
      // if (prevMarker) {
      //   prevMarker.setPosition(position);
      // } else {
      //   prevMarker = new window.google.maps.Marker(markerOption);
      //   prevMarker.setZIndex(100);
      // }
    }
  };

  const options = {
    responsive: true,
    title: {
      display: true,
      text: "경로 고도 그래프",
    },
    tooltips,
    events: ["mousemove", "mouseout"],
    onHover,
    legend: {
      display: false,
    },
  };

  const onMouseEnterHandler = () => {
    console.log("enter");
    // prevMarker.setOpacity(1);
  };
  const onMouseLeaveHandler = () => {
    console.log("leave");
    // prevMarker.setOpacity(0);
  };
  const title = useClick({ onMouseEnterHandler, onMouseLeaveHandler });

  return <Bar data={graphData} height={75} options={options} ref={title}></Bar>;
};

export default ChartElevation;
