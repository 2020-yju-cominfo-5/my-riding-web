const getMapOptions = (center) => {
  return {
    map: {
      center: center,
      disableDefaultUI: true,
      zoom: 15,
    },
    polyline: {
      strokeColor: "#32AF7B",
      strokeWeight: 5,
    },
    prevPolyline: {
      strokeColor: "#32AF7B70",
      strokeWeight: 5,
    },
  };
};

export default getMapOptions;
