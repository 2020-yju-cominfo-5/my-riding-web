const getPathData = (res) => {
  const pathData = res.data[0].points.map((ele) => {
    const { lat, lng } = ele;
    return { lat, lng };
  });
  return pathData;
};

export default getPathData;
