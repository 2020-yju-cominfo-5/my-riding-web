import pointStart from "../img/marker/pointStart.png";
import pointEnd from "../img/marker/pointEnd.png";
import point from "../img/marker/point.png";

const getMarkerIcon = (id, scaledSize) => {
  const icons = {
    start: pointStart,
    end: pointEnd,
    point,
  };

  return { url: icons[id], scaledSize };
};

export default getMarkerIcon;
