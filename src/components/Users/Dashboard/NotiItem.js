import React from "react";
import { Link } from "react-router-dom";
import { getDateKorContext } from "../../../util/getDateContext";

import "./NotiItem.css";

const NotiItem = ({ noti }) => {
  const { contentId, type, msg, url, created_at } = noti;

  const types = {
    1001: "route",
    1002: "record",
    1003: "medal",
  };
  const category = types[type];
  const { icon, content } = {
    icon: {
      medal: <i className="fas fa-medal" style={{ color: "#f8cd58" }}></i>,
      record: <i className="fas fa-biking" style={{ color: "#3773d4" }}></i>,
      route: <i className="fas fa-heart" style={{ color: "#ff0000" }}></i>,
    },
    content: {
      medal: (
        <>
          {/* <Link to={`/profile/badge/${contentId}`}>달성 기록</Link> 메뉴에서 */}
          달성 기록 메뉴에서 배지 상세정보를 확인하세요.
        </>
      ),
      record: (
        <>
          {/* FIXME URL 정보로 수정해야함 */}
          <Link to={`/record/show/${contentId}`}>라이딩 일지</Link> 메뉴에서
          세부 라이딩 정보를 확인하세요.
        </>
      ),
      route: (
        <>
          {/* FIXME URL 정보로 수정해야함 */}
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
      <div className="date">{getDateKorContext({ date: created_at })}</div>
      {/* TODO 라이딩 알림 확인 API 추가 필요 -> 버튼 이벤트 추가*/}
      <div className="close-btn">&times;</div>
    </div>
  );
};

export default NotiItem;
