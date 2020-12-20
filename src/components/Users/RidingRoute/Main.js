import React from "react";
import Title from "../../item/Title";
import RouteList from "./RouteList";

const Main = () => {
  return (
    <>
      <Title title="라이딩 경로" />
      <div className="route-main-wrapper">
        <RouteList />
        <div className="route-info"></div>
      </div>
    </>
  );
};

export default Main;
