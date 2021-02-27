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
      strokeColor: "#32AF7B99",
      strokeWeight: 5,
    },
  };
};

export default getMapOptions;
