import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <Link to="/" className="nav-title">
        マイライディング
      </Link>
      {/* <div className="nav-title"></div> */}
      <div className="nav-menus">
        <Link to="/home" className="nav-menu">
          대시보드
        </Link>
        <Link to="/record" className="nav-menu">
          라이딩 일지
        </Link>
        <Link to="/route" className="nav-menu">
          라이딩 경로
        </Link>
      </div>
      <div className="nav-profile">
        <Link to="/profile" className="img" />
        <div className="dropdown"></div>
        {/* <div className="btn-logout"></div> */}
        <Link to="/logout" className="logout">
          로그아웃
        </Link>
      </div>
    </>
  );
}

export default Menu;
