import getElevationDataset from "./getElevationDataset";

const getPlotElevation = ({ path, setGraphData }) => {
  const plotElevation = (elevations, status) => {
    if (status === "OVER_QUERY_LIMIT") {
      return;
    }
    if (status !== "OK") {
      // Show the error code inside the chartDiv.
      alert("실패");
      return;
    }

    const dataset = getElevationDataset({ elevations, path });
    const datasets = [
      {
        label: "고도",
        data: dataset.elevations,
        borderColor: "#3773d4",
        backgroundColor: "#3773d4",
        borderWidth: 2,
      },
    ];
    setGraphData({
      labels: dataset.distance,
      locations: dataset.locations,
      datasets,
    });
  };

  return plotElevation;
};

export default getPlotElevation;
