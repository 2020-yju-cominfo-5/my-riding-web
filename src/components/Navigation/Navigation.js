import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./Navigation.css";
import NavTitle from "./NavTitle";
import Menu from "./Menu";

const Navigation = ({ auth }) => {
  const { isLogin, setIsLogin } = auth;
  const location = useLocation();

  // TODO 로그인 체크
  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className="navigation">
      <div className="wrapper">{isLogin ? <Menu /> : <NavTitle />}</div>
    </div>
  );
};

export default Navigation;
