import React from "react";
import { Link } from "react-router-dom";

import Title from "../../item/Title";
import ChartStats from "../../item/ChartStats";
import "./List.css";

const List = ({ match }) => {
  const { week } = match.params;
  const recordList = {
    id: week,
    date: "Oct 26 - Nov 1",
    distance: "00.0km",
    time: "00시간 00분",
    avgSpeed: "00km/h",
    score: "000점",
    path: [],
    list: [
      {
        id: 26,
        date: "2020년 10월 26일",
        title: "학교 가는 길",
        distance: "3.2km",
        time: "00시간 00분",
        score: "062점",
      },
      {
        id: 25,
        date: "2020년 10월 26일",
        title: "새벽 라이딩",
        distance: "3.2km",
        time: "00시간 00분",
        score: "062점",
      },
      {
        id: 24,
        date: "2020년 11월 01일",
        title: "아양교에서 첫번째 라이딩",
        distance: "3.2km",
        time: "00시간 00분",
        score: "062점",
      },
      {
        id: 23,
        date: "2020년 10월 29일",
        title: "비오는 날의 라이딩",
        distance: "1.3km",
        time: "00시간 00분",
        score: "023점",
      },
      {
        id: 22,
        date: "2020년 10월 27일",
        title: "201027_RIDING_001",
        distance: "6.7km",
        time: "00시간 00분",
        score: "106점",
      },
      {
        id: 21,
        date: "2020년 10월 27일",
        title: "집 가는 길",
        distance: "13.2km",
        time: "00시간 00분",
        score: "214점",
      },
      {
        id: 20,
        date: "2020년 10월 26일",
        title: "공항에서 첫번째 라이딩",
        distance: "3.2km",
        time: "00시간 00분",
        score: "062점",
      },
    ],
  };

  return (
    <>
      <Title title="주간 라이딩 일지" />
      <div className="record-list">
        <ChartStats data={recordList} />
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
            {recordList.list.map(
              ({ id, date, title, distance, time, score }) => {
                return (
                  <li key={id}>
                    <span>{date}</span>
                    <span>
                      <Link to={`/record/show/${id}`}>{title}</Link>
                    </span>
                    <span>{distance}</span>
                    <span>{time}</span>
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
              },
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default List;
