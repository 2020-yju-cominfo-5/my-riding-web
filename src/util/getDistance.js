const getDistance = (path) => {
  let distance = 0;

  if (path.length < 2) {
    return distance;
  }

  path.forEach((_, idx) => {
    if (path.length - 1 === idx) {
      return;
    }

    const point_1 = path[idx];
    const point_2 = path[parseInt(idx) + 1];

    const result = window.google.maps.geometry.spherical.computeDistanceBetween(
      new window.google.maps.LatLng(point_1.lat, point_1.lng),
      new window.google.maps.LatLng(point_2.lat, point_2.lng),
    );

    distance += Math.round(result);
  });
  return distance;
};

export default getDistance;
