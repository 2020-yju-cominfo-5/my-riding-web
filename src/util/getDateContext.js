const getDateKorContext = ({ date }) => {
  const dateObj = new Date(date);
  const checkNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };
  const year = dateObj.getFullYear();
  const month = checkNumber(dateObj.getMonth() + 1);
  const day = checkNumber(dateObj.getDate());

  return `${year}년 ${month}월 ${day}일`;
};

const getDateShortContext = ({ startDate, endDate }) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);

  return `${months[startDateObj.getMonth()]} ${startDateObj.getDate()} - ${
    months[endDateObj.getMonth()]
  } ${endDateObj.getDate()}`;
};

const getTimeContext = ({ time }) => {
  return time === 60
    ? "1시간"
    : time < 60
    ? `${time}분`
    : `${Math.floor(time / 60)}시간 ${time % 60}분`;
};

export { getDateKorContext, getDateShortContext, getTimeContext };
