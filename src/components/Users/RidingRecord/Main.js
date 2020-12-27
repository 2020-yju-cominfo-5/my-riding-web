import React, { useState } from "react";
import Title from "../../item/Title";
import ChartStats from "../../item/ChartStats";
import "./Main.css";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Main = () => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const options = [
    `${currentYear}`,
    `${currentYear - 1}`,
    `${currentYear - 2}`,
  ];
  const changeYear = ({ value }) => {
    setYear(value);
  };

  // TODO 데이터셋 정의 필요
  const recordStats = [
    {
      id: "21",
      date: "Oct 26 - Nov 1",
      distance: "00.0km",
      time: "00시간 00분",
      avgSpeed: "00km/h",
      dataset: [],
    },
    {
      id: "20",
      date: "Oct 19 - Oct 25",
      distance: "00.0km",
      time: "00시간 00분",
      avgSpeed: "00km/h",
      dataset: [],
    },
    {
      id: "19",
      date: "Oct 12 - Oct 18",
      distance: "00.0km",
      time: "00시간 00분",
      avgSpeed: "00km/h",
      dataset: [],
    },
    {
      id: "18",
      date: "Oct 05 - Oct 11",
      distance: "00.0km",
      time: "00시간 00분",
      avgSpeed: "00km/h",
      dataset: [],
    },
  ];

  return (
    <>
      <Title title="라이딩 일지" />
      <div className="record-main">
        <div className="header">
          <div className="dropdown-section">
            <Dropdown
              options={options}
              onChange={changeYear}
              value={options[0]}
              placeholder="조회년도"
            />
          </div>
          <div className="dropdown-txt">년</div>
          <div className="legend-section">
            <div>거리</div>
            <div>시간</div>
            <div>평균속도</div>
          </div>
        </div>
        <div className="chart-section">
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
          <ul className="chart-contents">
            {recordStats.map((record) => {
              const { id } = record;
              return <ChartStats key={id} data={record} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main;
