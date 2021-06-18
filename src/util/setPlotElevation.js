const setPlotElevation = ({ elevator, path, plotElevation }) => {
  return elevator.getElevationAlongPath({ path, samples: 500 }, plotElevation);
};

export default setPlotElevation;
