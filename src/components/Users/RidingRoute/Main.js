import React from "react";
import Title from "../../item/Title";
import RouteList from "./RouteList";
import RouteInfo from "./RouteInfo";

const Main = ({ match: { params } }) => {
  // TODO useAxios
  const routeList = [
    {
      id: 20,
      date: "2020년 11월 01일",
      name: "아양교 ~ 공항교 라이딩",
      distance: "3.2km",
      time: "00시간 00분",
      like: "00",
      count: "00",
    },
    {
      id: 21,
      date: "2020년 10월 29일",
      name: "영진전문대학교 다운힐",
      distance: "1.3km",
      time: "00시간 00분",
      like: "00",
      count: "00",
    },
    {
      id: 22,
      date: "2020년 10월 27일",
      name: "금호강 따라 라이딩",
      distance: "6.7km",
      time: "00시간 00분",
      like: "00",
      count: "00",
    },
    {
      id: 23,
      date: "2020년 10월 27일",
      name: "강정보 라이딩",
      distance: "13.2km",
      time: "00시간 00분",
      like: "00",
      count: "00",
    },
    {
      id: 24,
      date: "2020년 10월 23일",
      name: "경북대학교 ~ 산격동 라이딩",
      distance: "3.2km",
      time: "00시간 00분",
      like: "00",
      count: "00",
    },
    {
      id: 25,
      date: "2020년 10월 22일",
      name: "라이딩은 즐겁다",
      distance: "3.2km",
      time: "00시간 00분",
      like: "00",
      count: "00",
    },
  ];

  const id = params.id || routeList[0].id;

  return (
    <>
      <Title title="라이딩 경로" />
      <div className="route-main-wrapper">
        <RouteList routeList={routeList} />
        <RouteInfo id={id} />
      </div>
    </>
  );
};

export default Main;
