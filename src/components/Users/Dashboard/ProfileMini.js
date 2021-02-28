import React from "react";
import { getDateKorContext } from "../../../util/getDateContext";
import "./ProfileMini.css";

const ProfileMini = ({ user }) => {
  const { nickname, score, count, last_riding, last_riding_id } = user;
  const onClickHandler = () => {
    window.location.replace(`/record/show/${last_riding_id}`);
  };

  return (
    <div className="profile-mini">
      <div className="user-img"></div>
      <div className="user-info">
        <div className="name">{nickname}</div>
        <div className="section">
          <div className="score">
            <p className="title">라이딩 점수</p>
            <p className="value">{score}</p>
          </div>
          <div className="count">
            <p className="title">총 라이딩 횟수</p>
            <p className="value">{count}</p>
          </div>
        </div>
        <div className="footer">
          <div className="latest">
            <p className="title">최근 라이딩</p>
            <p className="date">{getDateKorContext({ date: last_riding })}</p>
          </div>
          <div className="record-detail" onClick={onClickHandler}>
            <p>내 라이딩 기록 상세 보기 &gt;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMini;
