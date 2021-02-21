import React from "react";
import { Link } from "react-router-dom";
import {
  getDateKorContext,
  getTimeContext,
} from "../../../../util/getDateContext";

const RouteListItem = ({ data, setSelectedId }) => {
  const {
    id,
    created_at: date,
    route_title: name,
    route_distance: distance,
    route_time: time,
    route_like: like,
    route_num_of_try_count: count,
  } = data;
  const onClickHandler = () => {
    setSelectedId(id);
  };

  return (
    <li key={id} id={id} className="value" onClick={onClickHandler}>
      <div className="date">{getDateKorContext({ date })}</div>
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
};

export default RouteListItem;
