const setPlotElevation = ({ elevator, path, plotElevation }) =>
  elevator.getElevationAlongPath({ path, samples: 500 }, plotElevation);

export default setPlotElevation;
