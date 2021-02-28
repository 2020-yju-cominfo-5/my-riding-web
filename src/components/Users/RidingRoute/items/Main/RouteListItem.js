import React from "react";
import { Link } from "react-router-dom";
import { deleteRidingRouteById } from "../../../../../api/RidingRoute";
import {
  getDateKorContext,
  getTimeContext,
} from "../../../../../util/getDateContext";

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
  const onDeleteHandler = () => {
    if (window.confirm(`[${name}] 을 라이디 경로 목록에서 삭제하겠습니까?`)) {
      deleteRidingRouteById(id)
        .then((res) => {
          alert("라이딩 경로 삭제에 성공하였습니다.");
          window.location.reload(`route`);
        })
        .catch((err) => {
          alert("라이딩 경로 삭제에 실패하였습니다.");
        });
    }
  };

  return (
    <li key={id} id={id} className="value" onClick={onClickHandler}>
      <div className="date">{getDateKorContext({ date })}</div>
      <div className="name">
        <Link to={`/route/show/${id}`}>{name}</Link>
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
      <button className="del-btn" onClick={onDeleteHandler}>
        삭제
      </button>
    </li>
  );
};

export default RouteListItem;
