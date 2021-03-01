import React from "react";
import { Link } from "react-router-dom";
import RecordMap from "../../../RidingRecord/items/Show/RecordMap";
import { getTimeContext } from "../../../../../util/getDateContext";
import getRoundValue from "../../../../../util/getRoundValue";

import "./RouteInfo.css";

const RouteInfo = ({ route, path, pathError }) => {
  const {
    id,
    route_title: name,
    route_start_point_address: startAddress,
    route_end_point_address: endAddress,
    route_distance: distance,
    route_time: time,
  } = route;

  if (!id) {
    return <></>;
  }

  return (
    <div className="route-info">
      <div className="left">
        <div className="wrapper">
          <div className="name">{name}</div>
          <ul>
            <li>
              <div className="title">출발지</div>
              <div className="value">{startAddress}</div>
            </li>
            <li>
              <div className="title">도착지</div>
              <div className="value">{endAddress}</div>
            </li>
            <li>
              <div className="title">거리</div>
              <div className="value">{getRoundValue(distance)}km</div>
              <div className="title">시간</div>
              <div className="value">{getTimeContext({ time })}</div>
            </li>
          </ul>
        </div>
        <Link to={`/route/show/${id}`} className="show-btn">
          라이딩 경로 정보 상세보기 &gt;
        </Link>
      </div>
      <div className="right">
        {pathError ? (
          path ? (
            <RecordMap path={path} />
          ) : (
            "로딩중입니다."
          )
        ) : (
          "경로 정보 조회를 실패하였습니다."
        )}
      </div>
    </div>
  );
};

export default RouteInfo;
