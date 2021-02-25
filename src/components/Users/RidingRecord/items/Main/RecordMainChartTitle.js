import React from "react";

const RecordMainChartTitle = ({ year }) => {
  return (
    <ul className="chart-title">
      <li>{year}</li>
      <li>월</li>
      <li>화</li>
      <li>수</li>
      <li>목</li>
      <li>금</li>
      <li>토</li>
      <li>일</li>
    </ul>
  );
};

export default RecordMainChartTitle;
