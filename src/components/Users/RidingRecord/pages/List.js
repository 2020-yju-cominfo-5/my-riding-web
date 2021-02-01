import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRidingRecordWeek } from "../../../../api/RidingRecord";
import { getDateContext, getTimeContext } from "../../../../util";
import Title from "../../../item/Title";
import WeekStat from "../items/WeekStat";
import "./List.css";

const List = ({ match }) => {
  const { week } = match.params;
  const [data, setData] = useState({
    stat: {
      startDate: "",
      endDate: "",
      values: [],
    },
    records: [],
  });
  const [scoreSum, setScoreSum] = useState(0);
  useEffect(() => {
    getRidingRecordWeek(week).then((res) => {
      setData({ stat: res.data.stat, records: res.data.records });
      setScoreSum(
        res.data.records.reduce((prev, curr) => {
          const prevScore = prev.score ? prev.score : prev;
          return prevScore + curr.score;
        }),
      );
    });
  }, []);

  return (
    <>
      <Title title="주간 라이딩 일지" />
      <div className="record-list">
        <WeekStat stat={data.stat} score={scoreSum} />
        <div className="list">
          <ul className="record-title">
            <li>날짜</li>
            <li>제목</li>
            <li>거리</li>
            <li>시간</li>
            <li>라이딩 점수</li>
            <li>&nbsp;</li>
          </ul>
          <ul className="records">
            {data.records.map((record) => {
              const { id, date, title, distance, time, score } = record;
              return (
                <li key={id}>
                  <span>{getDateContext({ date })}</span>
                  <span>
                    <Link to={`/record/show/${id}`}>{title}</Link>
                  </span>
                  <span>{(distance / 1000).toFixed(1)} km</span>
                  <span>{getTimeContext({ time })}</span>
                  <span>
                    <i className="fas fa-bolt"></i>
                    {score}
                  </span>
                  {/* onClick 으로 수정 필요? vs 컴포넌트 호출 */}
                  <span>
                    <Link to={`/record`}>삭제</Link>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default List;
