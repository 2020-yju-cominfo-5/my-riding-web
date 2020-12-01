import React from "react";
import Title from "../../item/Title";
import "./List.css";

const List = ({ match }) => {
  const { week } = match.params;
  const recordData = {
    id: week,
    date: "Oct 26 - Nov 1",
    distance: "00.0km",
    time: "00시간 00분",
    avgSpeed: "00km/h",
    score: "000점",
    dataset: [],
    list: [
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
      {
        id: 19,
        date: "2020년 10월 26일",
        title: "학교 가는 길",
        distance: "3.2km",
        time: "00시간 00분",
        score: "062점",
      },
    ],
  };
  console.log(week);
  return (
    <>
      <Title title="주간 라이딩 일지" />
      <div className="record-list">
        <div className="chart-content">
          <div className="chart-left">
            <div className="date">{recordData.date}</div>
            <div className="distance">
              <span className="title">총 거리</span>
              <span className="value">{recordData.distance}</span>
            </div>
            <div className="time">
              <span className="title">총 시간</span>
              <span className="value">{recordData.time}</span>
            </div>
            <div className="avg-speed">
              <span className="title">평균 속도</span>
              <span className="value">{recordData.avgSpeed}</span>
            </div>
            <div className="score">
              <span className="title">라이딩 점수</span>
              <span className="value">{recordData.score}</span>
            </div>
          </div>
          <div className="chart-right"></div>
        </div>
        <div className="record-list">
          <ul className="record-title">
            <li>날짜</li>
            <li>제목</li>
            <li>거리</li>
            <li>시간</li>
            <li>라이딩 점수</li>
          </ul>
          <ul className="records">
            {recordData.list.map(
              ({ id, date, title, distance, time, score }) => {
                return (
                  <li key={id}>
                    <span>{date}</span>
                    {/* TODO Link 추가 */}
                    <span>{title}</span>
                    <span>{distance}</span>
                    <span>{time}</span>
                    <span>{score}</span>
                    {/* TODO Link 추가 */}
                    <span>삭제</span>
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
