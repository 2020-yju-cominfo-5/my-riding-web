import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getRidingRecordByWeek } from "../../../../api/RidingRecord";
import { getDateContext, getTimeContext } from "../../../../util";
import Title from "../../../item/Title";
import WeekStat from "../items/WeekStat";
import "./List.css";

const List = ({ match }) => {
  const { year, week } = match.params;
  const history = useHistory();

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
    getRidingRecordByWeek(year, week)
      .then((res) => {
        const { stat, records } = res.data;
        setData({ stat, records });

        setScoreSum(
          records.length === 1
            ? records[0].score
            : records.reduce((prev, curr) => {
                const prevScore = prev.score ? prev.score : prev;
                return prevScore + curr.score;
              }),
        );
      })
      .catch(() => {
        alert(`${year}년 ${week}주차 라이딩 일지 조회에 실패하였습니다.`);
        history.push("/record");
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
                  <span>
                    {/* TODO btn 으로 변경, 삭제 API 적용 */}
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
