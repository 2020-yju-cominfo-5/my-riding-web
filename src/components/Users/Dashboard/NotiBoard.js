import React from "react";
import NotiItem from "./NotiItem";

const NotiBoard = ({ noti }) => {
  return (
    <div className="noti-board">
      {noti.map((ele, idx) => {
        return <NotiItem key={idx} noti={ele} />;
      })}
    </div>
  );
};

export default NotiBoard;
