const getTimeContext = ({ time }) => {
  return time === 60
    ? "1시간"
    : time < 60
    ? `${time}분`
    : `${Math.floor(time / 60)}시간 ${time % 60}분`;
};

export default getTimeContext;
