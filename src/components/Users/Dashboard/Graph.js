import React, { useEffect, useState } from "react";
import * as moment from "moment";
import { getDateKorContext } from "../../../util/getDateContext";
import RecordChart from "../RidingRecord/items/RecordChart";
import "./Graph.css";
import { getDashboardStat } from "../../../api/Dashboard";

const Graph = ({ stat }) => {
  const [date, setDate] = useState({ year: stat.year, week: stat.week });
  const [prevDate, setPrevDate] = useState(date);
  const [period, setPeriod] = useState({
    startDate: stat.startDate,
    endDate: stat.endDate,
  });
  const [values, setValues] = useState(stat.values);

  const { week, year } = date;
  const { startDate, endDate } = period;

  const isRightBtn =
    moment().year() === parseInt(year) && moment().isoWeek() === parseInt(week);

  useEffect(() => {
    if (
      isRightBtn &&
      parseInt(prevDate.year) === parseInt(date.year) &&
      parseInt(prevDate.week) === parseInt(date.week)
    ) {
      return;
    }
    // TODO 대쉬보드 라이딩 요약
    getDashboardStat(date)
      .then(() => {
        // TODO 데이터 매핑 필요
        // setPeriod({});
        // setValues({});
      })
      .catch(() => {
        alert(
          `${date.year} 년 ${date.week} 주차의 라이딩 통계 요약 조회에 실패하였습니다.`,
        );
        setDate(prevDate);
      });
  }, [date]);

  const onWeekChangeHandler = ({ target }) => {
    const btn = target.getAttribute("class").split(" ")[1];
    const tmp = { year: parseInt(year), week: parseInt(week) };

    setPrevDate(date);
    switch (btn) {
      case "fa-caret-left":
        if (tmp.week === 1) {
          tmp.year--;
          tmp.week = moment(`${tmp.year}-12-31`).isoWeeksInYear();
          break;
        }
        tmp.week--;
        break;
      case "fa-caret-right":
        if (tmp.week === moment(`${tmp.year}-12-31`).isoWeeksInYear()) {
          tmp.year++;
          tmp.week = 1;
          break;
        }
        tmp.week++;
        break;
      default:
        break;
    }

    tmp.week = tmp.week < 10 ? "0" + tmp.week : tmp.week;
    setDate({ year: tmp.year, week: tmp.week });
  };

  return (
    <div className="graph">
      <div className="title">
        <p className="main">
          <i className="fas fa-caret-left" onClick={onWeekChangeHandler} />
          <span className="text">
            {year} 년 {week} 주차
          </span>
          <i
            className={`fas fa-caret-right ${isRightBtn && "hidden"}`}
            onClick={onWeekChangeHandler}
          />
        </p>
        <p className="sub">
          {getDateKorContext({ date: startDate }) +
            " ~ " +
            getDateKorContext({ date: endDate })}
        </p>
      </div>
      <div className="body">
        {values.length === 0 ? (
          <div className="no-data">해당 주에 라이딩 기록이 없습니다.</div>
        ) : (
          <RecordChart values={values} height={95} />
        )}
      </div>
    </div>
  );
};

export default Graph;
