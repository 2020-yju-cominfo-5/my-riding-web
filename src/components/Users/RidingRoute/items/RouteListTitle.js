import React from "react";

const RouteListTitle = () => {
  return (
    <>
      <li className="title">
        <div className="date">등록일</div>
        <div className="name">경로명</div>
        <div className="distance">거리</div>
        <div className="time">예상 시간</div>
        <div className="etc">&nbsp;</div>
        <div className="del-btn">&nbsp;</div>
      </li>
    </>
  );
};

export default RouteListTitle;
