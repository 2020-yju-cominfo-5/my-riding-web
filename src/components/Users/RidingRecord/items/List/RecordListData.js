import React from "react";
import { Link } from "react-router-dom";
import {
  getDateKorContext,
  getTimeContext,
} from "../../../../../util/getDateContext";

const RecordListData = ({ records }) => {
  return (
    <ul className="records">
      {records.map((record) => {
        const { id, date, title, distance, time, score } = record;
        return (
          <li key={id}>
            <span>{getDateKorContext({ date })}</span>
            <span>
              <Link to={`/record/show/${id}`}>{title}</Link>
            </span>
            <span>{(distance / 1000).toFixed(1)} km</span>
            <span>{getTimeContext({ time })}</span>
            <span>
              <i className="fas fa-bolt"></i>
              {score}
            </span>
            <span>
              {/* TODO btn 으로 변경, 삭제 API 적용 */}
              <Link to={`/record`}>삭제</Link>
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default RecordListData;
