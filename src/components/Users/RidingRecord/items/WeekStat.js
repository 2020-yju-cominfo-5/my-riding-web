import React from "react";
import { Link } from "react-router-dom";
import { getDateShortContext } from "../../../../util/getDateContext";
import RecordChart from "./RecordChart";
import "./WeekStat.css";

// BUG 렌더링 여러번??? 컴포넌트 분리???
const WeekStat = ({ stat, year, score, height, label }) => {
  const { startDate, endDate, values } = stat;
  const week = stat.week || 0;

  // <<-- 해당 주에 운동 기록이 없을 경우 -->>
  if (values.length === 0) {
    return (
      <div className="no-stats">
        {startDate} ~ {endDate} 에는 라이딩 기록이 없습니다.
      </div>
    );
  }

  const sum =
    values.length !== 0 &&
    values.reduce((prev, next) => {
      return {
        distance: prev.distance + next.distance,
        time: prev.time + next.time,
        avg_speed: prev.avg_speed + next.avg_speed,
      };
    });

  return (
    <>
      <div className="chart-content">
        <div className="chart-left">
          <div className="date">
            {week ? (
              <Link to={`/record/week/${year}/${week}`}>
                {getDateShortContext({ startDate, endDate })}
              </Link>
            ) : (
              <p>{getDateShortContext({ startDate, endDate })}</p>
            )}
          </div>
          <div className="distance">
            <span className="title">총 거리</span>
            <span className="value">{sum.distance} km</span>
          </div>
          <div className="time">
            <span className="title">총 시간</span>
            <span className="value">{`${Math.floor(
              sum.time / 60,
            )}시간 ${sum.time % 60}분`}</span>
          </div>
          <div className="avg-speed">
            <span className="title">평균 속도</span>
            <span className="value">
              {Math.round((sum.avg_speed / values.length) * 10) / 10} km/h
            </span>
          </div>
          {score ? (
            <div className="score">
              <span className="title">라이딩 점수</span>
              <span className="value">{score}</span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="chart-right">
          <RecordChart values={values} height={height} label={label} />
        </div>
      </div>
    </>
  );
};

export default WeekStat;
