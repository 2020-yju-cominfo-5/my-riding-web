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

export default getDateShortContext;
