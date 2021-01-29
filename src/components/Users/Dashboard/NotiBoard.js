import React from "react";
import NotiItem from "./NotiItem";

const NotiBoard = () => {
  const notiList = [
    {
      contentId: 25,
      category: "medal",
      msg: "총 라이딩 거리 4,000km 를 달성하여, 배지를 획득 하였습니다.",
      date: "2020-10-28 (수)",
    },
    {
      contentId: 24,
      category: "record",
      msg: "2020년 10월 26일 라이딩이 완료되었습니다",
      date: "2020-10-28 (수)",
    },
    {
      contentId: 23,
      category: "route",
      msg:
        "'아양교 ~ 공항교 라이딩 코스' 에 슈퍼라이더 님께서 좋아요를 누르셨습니다.",
      date: "2020-10-28 (수)",
    },
    {
      contentId: 22,
      category: "medal",
      msg: "총 라이딩 거리 4,000km 를 달성하여, 배지를 획득 하였습니다.",
      date: "2020-10-28 (수)",
    },
    {
      contentId: 21,
      category: "record",
      msg: "2020년 10월 26일 라이딩이 완료되었습니다",
      date: "2020-10-28 (수)",
    },
    {
      contentId: 20,
      category: "route",
      msg:
        "'아양교 ~ 공항교 라이딩 코스' 에 슈퍼라이더 님께서 좋아요를 누르셨습니다.",
      date: "2020-10-28 (수)",
    },
  ];
  return (
    <div className="noti-board">
      {notiList.map((ele) => {
        return <NotiItem noti={ele} />;
      })}
    </div>
  );
};

export default NotiBoard;
