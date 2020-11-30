import React from "react";
import "./Navigation.css";
import Title from "./Title";
import Menu from "./Menu";

const Navigation = () => {
  // TODO 로그인 체크
  const isLogin = localStorage.getItem("isLogin");

  return (
    <div className="navigation">
      <div className="wrapper">{isLogin ? <Menu /> : <Title />}</div>
    </div>
  );
};

export default Navigation;
