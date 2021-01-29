import React from "react";
import Title from "../../item/Title";

import "./Show.css";

const Show = ({ match: { params } }) => {
  const {
    name,
    like,
    usrCount,
    tryCount,
    distacne,
    time,
    grade,
    minAlt,
    maxAlt,
    myRank,
    myBestRecord,
    myAvgRecord,
    rank,
  } = {
    name: `아양교~공항교 라이딩 ${params.id}`,
    like: 10,
    usrCount: 35,
    tryCount: 100,
    distacne: 15.2,
    time: 367,
    grade: 13,
    minAlt: 12.2,
    maxAlt: 25.6,
    myRank: 1,
    myBestRecord: "01:20:30",
    myAvgRecord: "01:45:50",
    rank: [
      {
        name: "정재순",
        record: "01:20:30",
        date: "0000년 00월 00일",
        maxSpeed: 25,
      },
      {
        name: "김창한",
        record: "01:22:15",
        date: "0000년 00월 00일",
        maxSpeed: 21,
      },
      {
        name: "박중규",
        record: "01:25:20",
        date: "0000년 00월 00일",
        maxSpeed: 23,
      },
      {
        name: "정재순",
        record: "01:20:30",
        date: "0000년 00월 00일",
        maxSpeed: 25,
      },
      {
        name: "김창한",
        record: "01:22:15",
        date: "0000년 00월 00일",
        maxSpeed: 21,
      },
      {
        name: "박중규",
        record: "01:25:20",
        date: "0000년 00월 00일",
        maxSpeed: 23,
      },
      {
        name: "정재순",
        record: "01:20:30",
        date: "0000년 00월 00일",
        maxSpeed: 25,
      },
      {
        name: "김창한",
        record: "01:22:15",
        date: "0000년 00월 00일",
        maxSpeed: 21,
      },
      {
        name: "박중규",
        record: "01:25:20",
        date: "0000년 00월 00일",
        maxSpeed: 23,
      },
      {
        name: "정재순",
        record: "01:20:30",
        date: "0000년 00월 00일",
        maxSpeed: 25,
      },
      {
        name: "김창한",
        record: "01:22:15",
        date: "0000년 00월 00일",
        maxSpeed: 21,
      },
      {
        name: "박중규",
        record: "01:25:20",
        date: "0000년 00월 00일",
        maxSpeed: 23,
      },
    ],
  };

  return (
    <div className="route-show">
      <div className="header-title">
        <Title title={name} />
        <div className="sub-title">
          <i className="fas fa-heart"></i>
          <span className="txt">{like} 개</span>
          <i className="fas fa-biking"></i>
          <span className="txt">
            {usrCount}명이 {tryCount}회 시도
          </span>
        </div>
      </div>
      <div className="section">
        <div className="info">
          <div className="top">
            <div className="item">
              <div className="title">거리</div>
              <div className="value">{distacne}km</div>
            </div>
            <div className="item">
              <div className="title">예상 시간</div>
              <div className="value">{time}분</div>
            </div>
            <div className="item">
              <div className="title">평균 경사도</div>
              <div className="value">{grade}%</div>
            </div>
            <div className="item">
              <div className="title">최고 고도</div>
              <div className="value">{minAlt}m</div>
            </div>
            <div className="item">
              <div className="title">최저 고도</div>
              <div className="value">{maxAlt}m</div>
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <div className="map">지도</div>
              <div className="graph">그래프</div>
            </div>
            <div className="right">
              <div className="my-record">
                <div className="record-title">
                  <p className="txt record-sub-title">내 라이딩 기록</p>
                  <p className="my-rank record-sub-title">
                    {myRank} / {usrCount}
                  </p>
                </div>
                <div className="record-value">
                  <div className="img"></div>
                  <div className="record">
                    <div className="wrapper">
                      <p className="title">통산 최고 기록</p>
                      <p className="value">{myBestRecord}</p>
                    </div>
                    <div className="wrapper">
                      <p className="title">평균 기록</p>
                      <p className="value">{myAvgRecord}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="best-record">
                <div className="record-title">
                  <p className="record-sub-title">가장 빠른 기록</p>
                </div>
                <div className="record-value">
                  <div className="img"></div>
                  <div className="record">
                    <div className="user-name">
                      <i className="fas fa-crown"></i>
                      <p className="txt">{rank[0].name}</p>
                    </div>
                    <div className="wrapper">
                      <p className="title">최고 기록</p>
                      <p className="value">{rank[0].record}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                const { name, record, date, maxSpeed } = ele;
                return (
                  <li className="user">
                    <span>
                      {idx === 0 ? (
                        <i className="fas fa-crown"></i>
                      ) : (
                        `${idx + 1}위`
                      )}
                    </span>
                    <span>{name}</span>
                    <span>{record}</span>
                    <span>{date}</span>
                    <span>{maxSpeed}km</span>
                  </li>
                );
              })}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Show;
