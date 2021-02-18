import React, { useState, useEffect } from "react";
import Title from "../../../item/Title";
import WeekStat from "../items/WeekStat";
import "./Main.css";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { getRidingRecordByYear } from "../../../../api/RidingRecord";

const Main = () => {
  const currentYear = new Date().getFullYear();
  const years = [`${currentYear}`, `${currentYear - 1}`, `${currentYear - 2}`];
  const [year, setYear] = useState(currentYear);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // TODO 에러 시 예외 처리 추가
    getRidingRecordByYear(year)
      .then((res) => {
        // TODO NO DATA 알고리즘 추가 필요 -> 해당 년도에 등록된 라이딩 기록이 없습니다.
        const { data } = res;
        setStats(data.stats, ...stats);
      })
      .catch((err) => {
        if (!err.response) {
          alert("서버와의 연결에 실패하였습니다.");
          return;
        }
        console.log(err.response);
        alert("라이딩 일지를 가져오는데 실패하였습니다.");
      });
  }, [year]);

  const yearChangeHandler = ({ value }) => {
    setYear(value);
  };

  return (
    <>
      <Title title="라이딩 일지" />
      <div className="record-main">
        <div className="header">
          <div className="dropdown-section">
            <Dropdown
              options={years}
              onChange={yearChangeHandler}
              value={years[0]}
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
            {/* FIXME stats object -> array 로 변경 필요 변경 시 바로 map 적용 */}
            {Object.values(stats).map((stat, idx) => {
              return <WeekStat key={idx} stat={stat} year={year} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main;
