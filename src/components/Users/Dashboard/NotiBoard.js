import React from "react";
import NotiItem from "./NotiItem";

const NotiBoard = ({ noti }) => {
  if (noti.length === 0) {
    return (
      <div className="noti-no-data">모든 라이딩 알림을 확인하였습니다.</div>
    );
  }
  return (
    <div className="noti-board">
      {noti.map((ele, idx) => {
        return <NotiItem key={idx} noti={ele} />;
      })}
    </div>
  );
};

export default NotiBoard;
