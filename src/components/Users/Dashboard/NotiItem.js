import React from "react";
import { Link } from "react-router-dom";

import "./NotiItem.css";

const NotiItem = ({ noti }) => {
  const { contentId, category, msg, date } = noti;

  const { icon, content } = {
    icon: {
      medal: <i className="fas fa-medal" style={{ color: "#f8cd58" }}></i>,
      record: <i className="fas fa-biking" style={{ color: "#3773d4" }}></i>,
      route: <i className="fas fa-heart" style={{ color: "#ff0000" }}></i>,
    },
    content: {
      medal: (
        <>
          <Link to={`/profile/badge/${contentId}`}>달성 기록</Link> 메뉴에서
          배지 상세정보를 확인하세요.
        </>
      ),
      record: (
        <>
          <Link to={`/record/show/${contentId}`}>라이딩 일지</Link> 메뉴에서
          세부 라이딩 정보를 확인하세요.
        </>
      ),
      route: (
        <>
          <Link to={`/route/show/${contentId}`}>라이딩 경로</Link> 메뉴에서 세부
          경로 정보를 확인하세요.
        </>
      ),
    },
  };

  return (
    <div className="noti-item">
      <div className="img">{icon[category]}</div>
      <div className="msg">
        <div className="msg-wrapper">
          <p className="txt">{msg}</p>
          <p className="txt">{content[category]}</p>
        </div>
      </div>
      <div className="date">{date}</div>
      <div className="close-btn">&times;</div>
    </div>
  );
};

export default NotiItem;
