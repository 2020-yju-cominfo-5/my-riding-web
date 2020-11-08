import React from "react";
import Title from "./Title";
import Menu from "./Menu";
import "./Navigation.css";

function Navigation() {
  // TODO check Login
  const isLogin = localStorage.getItem("isLogin");
  console.log(isLogin);
  return <div className="header">{isLogin ? <Menu /> : <Title />}</div>;
}

export default Navigation;
