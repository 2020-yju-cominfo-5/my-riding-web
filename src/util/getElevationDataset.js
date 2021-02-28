import getDistance from "./getDistance";

const getElevationDataset = ({ elevations, path }) => {
  const dataset = {
    elevations: [],
    distance: [],
    locations: [],
  };

  elevations.map((element) => {
    dataset.elevations.push(element.elevation);
    dataset.locations.push(element.location.toJSON());
    const tmpDistance = Math.round(
      (getDistance(path) / 500) * dataset.elevations.length,
    );
    const distanceTxt =
      tmpDistance < 1000
        ? tmpDistance + "m"
        : Math.round(tmpDistance / 10) / 100 + "km";
    dataset.distance.push(distanceTxt);
  });

  return dataset;
};

export default getElevationDataset;
