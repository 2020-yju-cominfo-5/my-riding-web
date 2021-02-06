import React, { useState } from "react";
import * as moment from "moment";
import "./Graph.css";

const Graph = ({ stats }) => {
  const [data, setData] = useState(stats);

  if (!data) {
    return <div className="graph">앗 내 데이터 주세요</div>;
  }
  const { year, week, start_date, end_date } = data;

  console.log(moment().year());
  const isRightBtn =
    moment().week() - 1 === parseInt(week) && moment().year() === year;
  console.log(isRightBtn);
  const onWeekChangeHandler = ({ target }) => {
    const btn = target.getAttribute("class").split(" ")[1];
    btn === "fa-caret-left" && console.log("앗 왼쪽");
    btn === "fa-caret-right" && console.log("앗 오른쪽");
    setData();
  };

  return (
    <div className="graph">
      <div className="title">
        <p className="main">
          {/* TODO 주차 넘어가는 기능 필요 */}
          <i className="fas fa-caret-left" onClick={onWeekChangeHandler} />
          <span className="text">
            {year}년 {week}주차
          </span>
          {isRightBtn || (
            <i className="fas fa-caret-right" onClick={onWeekChangeHandler} />
          )}
        </p>
        <p className="sub">{start_date + " ~ " + end_date}</p>
      </div>
      <div className="body">
        {stats.values.length === 0 ? (
          <div className="no-data">해당 주에 라이딩 기록이 없습니다.</div>
        ) : (
          // TODO 통계차트 추가
          ""
        )}
      </div>
    </div>
  );
};

export default Graph;
