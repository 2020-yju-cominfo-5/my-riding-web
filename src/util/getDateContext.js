const getDateContext = ({ date }) => {
  const dateObj = new Date(date);
  const checkNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };
  const year = dateObj.getFullYear();
  const month = checkNumber(dateObj.getMonth() + 1);
  const day = checkNumber(dateObj.getDate());

  return `${year}년 ${month}월 ${day}일`;
};

export default getDateContext;
