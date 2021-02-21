import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Title from "../../../item/Title";
import WeekStat from "../items/WeekStat";
import RecordListTitle from "../items/List/RecordListTitle";
import RecordListData from "../items/List/RecordListData";
import { getRidingRecordByWeek } from "../../../../api/RidingRecord";

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
          <RecordListTitle />
          <RecordListData records={data.records} />
        </div>
      </div>
    </>
  );
};

export default List;
