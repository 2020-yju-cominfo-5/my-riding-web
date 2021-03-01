import React from "react";
import { Link } from "react-router-dom";
import { deleteRidingRecordById } from "../../../../../api/RidingRecord";
import {
  getDateKorContext,
  getTimeContext,
} from "../../../../../util/getDateContext";
import getRoundValue from "../../../../../util/getRoundValue";

const RecordListData = ({ records }) => {
  const onDeleteHandler = ({ target }) => {
    const { name, id } = target;
    if (window.confirm(`[${name}]을 삭제하시겠습니까?`)) {
      deleteRidingRecordById(id)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => {
          alert(`${name} 삭제에 실패하였습니다.`);
        });
    }
  };
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
            <span>{getRoundValue(distance)} km</span>
            <span>{getTimeContext({ time })}</span>
            <span>
              <i className="fas fa-bolt"></i>
              {score}
            </span>
            <span>
              <button
                id={id}
                name={title}
                className="del-btn"
                onClick={onDeleteHandler}
              >
                삭제
              </button>
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default RecordListData;
