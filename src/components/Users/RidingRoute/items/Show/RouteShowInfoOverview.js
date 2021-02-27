import React from "react";
import "./RouteShowInfoOverview.css";

const RouteShowInfoOverview = ({ data }) => {
  const { distacne, time, grade, minAlt, maxAlt } = data;

  return (
    <div className="top">
      <div className="item">
        <div className="title">거리</div>
        <div className="value">{distacne}km</div>
      </div>
      <div className="item">
        <div className="title">예상 시간</div>
        <div className="value">{time}분</div>
      </div>
      <div className="item">
        <div className="title">평균 경사도</div>
        <div className="value">{grade}%</div>
      </div>
      <div className="item">
        <div className="title">최고 고도</div>
        <div className="value">{minAlt}m</div>
      </div>
      <div className="item">
        <div className="title">최저 고도</div>
        <div className="value">{maxAlt}m</div>
      </div>
    </div>
  );
};

export default RouteShowInfoOverview;
