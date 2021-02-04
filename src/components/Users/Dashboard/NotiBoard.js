import React from "react";
import NotiItem from "./NotiItem";

<<<<<<< Updated upstream
const NotiBoard = () => {
  return (
    <div className="noti-board">
      <NotiItem />
      <NotiItem />
      <NotiItem />
      <NotiItem />
      <NotiItem />
=======
const NotiBoard = ({ noti }) => {
  return (
    <div className="noti-board">
      {noti.map((ele, idx) => {
        return <NotiItem key={idx} noti={ele} />;
      })}
>>>>>>> Stashed changes
    </div>
  );
};

export default NotiBoard;
