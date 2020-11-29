import React from "react";
import "./ProfileMini.css";

const ProfileMini = () => {
  return (
    <div className="profile-mini">
      <div className="user-img"></div>
      <div className="user-info">
        <div className="name">정재순</div>
        <div className="section">
          <div className="score">
            <p className="title">라이딩 점수</p>
            <p className="value">1389</p>
          </div>
          <div className="count">
            <p className="title">라이딩 점수</p>
            <p className="value">13</p>
          </div>
        </div>
        <div className="footer">
          <div className="latest">
            <p className="title">최근 라이딩</p>
            <p className="date">2020년 10월 26일</p>
          </div>
          <div className="record-detail">
            <p>내 라이딩 기록 상세 보기 &gt;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMini;
