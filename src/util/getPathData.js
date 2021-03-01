const getPathData = (res, name) => {
  const pathData = res.data[0][name].map((ele) => {
    const { lat, lng } = ele;
    return { lat, lng };
  });
  return pathData;
};

export default getPathData;
