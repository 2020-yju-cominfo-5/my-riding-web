import React from "react";
import { Link } from "react-router-dom";

import "./RouteList.css";

const RouteList = ({ routeList }) => {
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
                  <Link to={`/route/${id}`}>{name}</Link>
                </div>
                <div className="distance">{distance}</div>
                <div className="time">{time}</div>
                <div className="etc">
                  <div className="like">
                    <i className="fas fa-heart"></i>
                    {like} 개
                  </div>
                  <div className="count">
                    <i className="fas fa-biking"></i>
                    {count} 회
                  </div>
                </div>
                <div className="del-btn">
                  <Link to={`/route/delete/${id}`}>삭제</Link>
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
