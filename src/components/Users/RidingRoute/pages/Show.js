import React, { useState, useEffect } from "react";
import { getRidingRouteById } from "../../../../api/RidingRoute";
import {
  getDateKorContext,
  getTimeContext,
} from "../../../../util/getDateContext";
import Title from "../../../item/Title";

import "./Show.css";

const Show = ({ match }) => {
  const { id } = match.params;
  const [data, setData] = useState({
    name: "",
    like: 0,
    usrCount: 0,
    tryCount: 0,
    distacne: 0,
    time: 0,
    grade: 0,
    minAlt: 0,
    maxAlt: 0,
    myRank: 0,
    myBestRecord: 0,
    myAvgRecord: 0,
    topRankerAccount: "",
    topRankerRecord: 0,
    rank: [],
  });
  useEffect(() => {
    getRidingRouteById(id)
      .then((res) => {
        const { route, record, rankvalue } = res.data;
        console.log(res.data);
        setData({
          name: route[0].route_title,
          like: route[0].route_like,
          usrCount: route[0].route_num_of_try_user,
          tryCount: route[0].route_num_of_try_count,
          distacne: route[0].route_distance,
          time: route[0].route_time,
          grade: route[0].route_avg_degree,
          minAlt: route[0].route_max_altitude,
          maxAlt: route[0].route_min_altitude,
          myRank: rankvalue.record_user_rank,
          myBestRecord: rankvalue.record_user_top,
          myAvgRecord: rankvalue.record_user_avg,
          topRankerAccount: rankvalue.record_top_score_user_account,
          topRankerRecord: rankvalue.record_top_score_user_time,
          rank: record,
        });
      })
      .catch((err) => {
        alert("경로 정보 조회에 실패하였습니다.");
      });
  }, []);
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
    topRankerAccount,
    topRankerRecord,
    rank,
  } = data;

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
                      <p className="value">
                        {getTimeContext({ time: myBestRecord })}
                      </p>
                    </div>
                    <div className="wrapper">
                      <p className="title">평균 기록</p>
                      <p className="value">
                        {getTimeContext({ time: myAvgRecord })}
                      </p>
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
                      <p className="txt">{topRankerAccount}</p>
                    </div>
                    <div className="wrapper">
                      <p className="title">최고 기록</p>
                      <p className="value">
                        {getTimeContext({ time: topRankerRecord })}
                      </p>
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
                // console.log(ele);
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
