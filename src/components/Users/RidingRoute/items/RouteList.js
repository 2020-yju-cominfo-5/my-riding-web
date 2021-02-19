import React from "react";
import { Link } from "react-router-dom";
import { getDateContext, getTimeContext } from "../../../../util";
import "./RouteList.css";

const RouteList = ({ routes }) => {
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
          {routes.map((ele) => {
            const {
              id,
              created_at: date,
              route_title: name,
              route_distance: distance,
              route_time: time,
              route_like: like,
              route_num_of_try_count: count,
            } = ele;
            return (
              <li key={id} className="value">
                <div className="date">{getDateContext({ date })}</div>
                <div className="name">
                  <Link to={`/route/${id}`}>{name}</Link>
                </div>
                <div className="distance">{distance}km</div>
                <div className="time">{getTimeContext({ time })}</div>
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
