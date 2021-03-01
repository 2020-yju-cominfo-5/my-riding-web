import React from "react";
import getRoundValue from "../../../../../util/getRoundValue";
import "./RouteShowInfoOverview.css";

const RouteShowInfoOverview = ({ data }) => {
  const { distacne, time, grade, minAlt, maxAlt } = data;

  return (
    <div className="top">
      <div className="item">
        <div className="title">거리</div>
        <div className="value">{getRoundValue(distacne)}km</div>
      </div>
      <div className="item">
        <div className="title">예상 시간</div>
        <div className="value">{getRoundValue(time)}분</div>
      </div>
      <div className="item">
        <div className="title">평균 경사도</div>
        <div className="value">{getRoundValue(grade)}%</div>
      </div>
      <div className="item">
        <div className="title">최고 고도</div>
        <div className="value">{getRoundValue(minAlt)}m</div>
      </div>
      <div className="item">
        <div className="title">최저 고도</div>
        <div className="value">{getRoundValue(maxAlt)}m</div>
      </div>
    </div>
  );
};

export default RouteShowInfoOverview;
