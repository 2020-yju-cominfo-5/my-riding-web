import React from "react";
import Title from "../../../../item/Title";

const RouteShowHeader = ({ data }) => {
  const { name, like, usrCount, tryCount } = data;
  return (
    <div className="header-title">
      <Title title={name} />
      <div className="sub-title">
        <i className="fas fa-heart"></i>
        <span className="txt">{like} 개</span>
        <i className="fas fa-biking"></i>
        <span className="txt">
          {usrCount}명이 {tryCount}회 시도
        </span>
      </div>
    </div>
  );
};

export default RouteShowHeader;
