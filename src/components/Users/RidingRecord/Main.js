import React, { useState, useEffect } from "react";
import Title from "../../item/Title";
import ChartStats from "./Stats";
import "./Main.css";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { getRidingRecordYear } from "../../../api/RidingRecord";

const Main = () => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const [stats, setStats] = useState([]);
  const options = [
    `${currentYear}`,
    `${currentYear - 1}`,
    `${currentYear - 2}`,
  ];
  const changeYear = ({ value }) => {
    setYear(value);
  };
  useEffect(() => {
    getRidingRecordYear(year).then((response) => {
      const { data } = response;
      setStats(data.stats, ...stats);
    });
  }, [year]);

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
            <li>일</li>
            <li>월</li>
            <li>화</li>
            <li>수</li>
            <li>목</li>
            <li>금</li>
            <li>토</li>
          </ul>
          <ul className="chart-contents">
            {stats.map((stat, idx) => {
              return <ChartStats key={idx} stat={stat} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main;
