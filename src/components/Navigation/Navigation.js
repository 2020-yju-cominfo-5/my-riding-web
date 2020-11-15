import React from "react";
import Title from "./Title";
import Menu from "./Menu";
import "../../style/Navigation/Navigation.css";

function Navigation() {
  // TODO check Login
  const isLogin = localStorage.getItem("isLogin");
  return <div className="header">{isLogin ? <Menu /> : <Title />}</div>;
}

export default Navigation;
