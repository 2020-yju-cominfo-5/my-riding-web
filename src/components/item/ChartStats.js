import React from "react";
import { Link } from "react-router-dom";
import "./ChartStats.css";

const ChartStats = ({ data }) => {
  const { id, date, distance, time, avgSpeed, score } = data;
  return (
    <>
      <div className="chart-content">
        <div className="chart-left">
          <div className="date">
            <Link to={`/record/week/${id}`}>{date}</Link>
          </div>
          <div className="distance">
            <span className="title">총 거리</span>
            <span className="value">{distance}</span>
          </div>
          <div className="time">
            <span className="title">총 시간</span>
            <span className="value">{time}</span>
          </div>
          <div className="avg-speed">
            <span className="title">평균 속도</span>
            <span className="value">{avgSpeed}</span>
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
        <div className="chart-right"></div>
      </div>
    </>
  );
};

export default ChartStats;
