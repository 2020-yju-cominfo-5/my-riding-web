import React from "react";
import {
  getDateKorContext,
  getTimeContext,
} from "../../../../../util/getDateContext";
import getRoundValue from "../../../../../util/getRoundValue";

const RouteShowRank = ({ rank }) => {
  return (
    <div className="rank">
      <ul>
        <li className="title">
          <span>순위</span>
          <span>이름</span>
          <span>기록</span>
          <span>달성일</span>
          <span>최고 속도</span>
        </li>
        <div className="user-rank-wrapper">
          {rank.map((ele, idx) => {
            const {
              user_account: name,
              rec_time: record,
              created_at: date,
              rec_max_speed: maxSpeed,
            } = ele;
            return (
              <li className="user" key={idx}>
                <span>
                  {idx === 0 ? (
                    <i className="fas fa-crown"></i>
                  ) : (
                    `${idx + 1}위`
                  )}
                </span>
                <span>{name}</span>
                <span>{getTimeContext({ time: record })}</span>
                <span>{getDateKorContext({ date })}</span>
                <span>{getRoundValue(maxSpeed)}km</span>
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default RouteShowRank;
