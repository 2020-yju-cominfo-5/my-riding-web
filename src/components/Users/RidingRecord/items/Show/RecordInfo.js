import React from "react";
import {
  getDateKorContext,
  getTimeContext,
} from "../../../../../util/getDateContext";
import getRoundValue from "../../../../../util/getRoundValue";

const RecordInfo = ({ info }) => {
  const {
    date,
    startAddress,
    endAddress,
    distance,
    avgSpeed,
    time,
    maxSpeed,
  } = info;
  return (
    <ul className="info">
      <li>
        <div className="date">{getDateKorContext({ date })}</div>
      </li>
      <li>
        <div className="start">
          <p className="title">출발지</p>
          <p className="value">{startAddress}</p>
        </div>
      </li>
      <li>
        <div className="end">
          <p className="title">도착지</p>
          <p className="value">{endAddress}</p>
        </div>
      </li>
      <li>
        <div className="distance">
          <p className="title">거리</p>
          <p className="value">{getRoundValue(distance)} km</p>
        </div>
        <div className="avg-speed">
          <p className="title">평균 속도</p>
          <p className="value">{getRoundValue(avgSpeed)} km/h</p>
        </div>
      </li>
      <li>
        <div className="time">
          <p className="title">시간</p>
          <p className="value">{getTimeContext({ time })}</p>
        </div>
        <div className="max-speed">
          <p className="title">최고 속도</p>
          <p className="value">{getRoundValue(maxSpeed)} km/h</p>
        </div>
      </li>
    </ul>
  );
};

export default RecordInfo;
