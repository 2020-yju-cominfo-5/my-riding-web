import React from "react";
import { Link } from "react-router-dom";

import "./RouteList.css";

const RouteList = () => {
  const routeList = [
    {
      id: 20,
      date: "2020년 11월 01일",
      name: "아양교 ~ 공항교 라이딩",
      distance: "3.2km",
      time: "00시간 00분",
      like: "00",
      count: "00",
    },
    {
      id: 21,
      date: "2020년 10월 29일",
      name: "영진전문대학교 다운힐",
      distance: "1.3km",
      time: "00시간 00분",
      like: "00",
      count: "00",
    },
    {
      id: 22,
      date: "2020년 10월 27일",
      name: "금호강 따라 라이딩",
      distance: "6.7km",
      time: "00시간 00분",
      like: "00",
      count: "00",
    },
    {
      id: 23,
      date: "2020년 10월 27일",
      name: "강정보 라이딩",
      distance: "13.2km",
      time: "00시간 00분",
      like: "00",
      count: "00",
    },
    {
      id: 24,
      date: "2020년 10월 23일",
      name: "경북대학교 ~ 산격동 라이딩",
      distance: "3.2km",
      time: "00시간 00분",
      like: "00",
      count: "00",
    },
    {
      id: 25,
      date: "2020년 10월 22일",
      name: "라이딩은 즐겁다",
      distance: "3.2km",
      time: "00시간 00분",
      like: "00",
      count: "00",
    },
  ];

  return (
    <div className="route-list">
      <ul>
        <li className="title">
          <div className="date">등록일</div>
          <div className="name">경로명</div>
          <div className="distance">거리</div>
          <div className="time">예상 시간</div>
          <div className="etc">&nbsp;</div>
          <div className="del-btn">&nbsp;</div>
        </li>
        <div className="value-wrapper">
          {routeList.map((element) => {
            const { id, date, name, distance, time, like, count } = element;
            return (
              <li key={id} className="value">
                <div className="date">{date}</div>
                <div className="name">
                  <Link to={`route/${id}`}>{name}</Link>
                </div>
                <div className="distance">{distance}</div>
                <div className="time">{time}</div>
                <div className="etc">
                  <div className="like">{like} 개</div>
                  <div className="count">{count} 회</div>
                </div>
                <div className="del-btn">
                  <Link to={`route/delete/${id}`}>삭제</Link>
                </div>
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default RouteList;
