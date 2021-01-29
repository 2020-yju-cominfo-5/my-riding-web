import React, { useState } from "react";
import { Link } from "react-router-dom";

import Title from "../../item/Title";
import Chart from "./RecordElevation";
import Map from "./RecordMap";

import "./Show.css";

const Show = ({ match }) => {
  const [graphData, setGraphData] = useState("");
  const { id } = match.params;
  const recordData = {
    id,
    title: "아양교에서 첫번째 라이딩",
    date: "2020년 10월 23일",
    startAddress: "대구 동구 검사동 아양교",
    endAddress: "대구 동구 효동로2길 72 동촌유원지",
    distance: "3.2 km",
    time: "13 분",
    avgSpeed: "11.0 km/h",
    maxSpeed: "20.0 km/h",
  };
  const {
    title,
    date,
    startAddress,
    endAddress,
    distance,
    time,
    avgSpeed,
    maxSpeed,
  } = recordData;
  return (
    <>
      <div className="record-show">
        <div className="header-title">
          <Title title={title} />
          <div>
            <Link to="/record">수정</Link>
          </div>
          <div>
            <Link to="/route/create/20">경로 만들기</Link>
          </div>
        </div>
        <div className="detail">
          <ul className="info">
            <li>
              <div className="date">{date}</div>
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
                <p className="value">{distance}</p>
              </div>
              <div className="avg-speed">
                <p className="title">평균 속도</p>
                <p className="value">{avgSpeed}</p>
              </div>
            </li>
            <li>
              <div className="time">
                <p className="title">시간</p>
                <p className="value">{time}</p>
              </div>
              <div className="max-speed">
                <p className="title">최고 속도</p>
                <p className="value">{maxSpeed}</p>
              </div>
            </li>
          </ul>
          <div className="map">
            <Map setGraphData={setGraphData} />
          </div>
        </div>
        <div className="chart">
          <Chart graphData={graphData} />
        </div>
      </div>
    </>
  );
};

export default Show;
