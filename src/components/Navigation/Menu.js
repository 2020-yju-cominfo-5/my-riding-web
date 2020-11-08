import React from "react";
import { Link } from "react-router-dom";
import useClick from "../../hooks/useClick";
import "./Menu.css";

function Menu() {
  const showProfileMenu = () => {
    let menu = document.getElementsByClassName("profile-menu")[0];
    menu.style.visibility = menu.style.visibility || "visible";
  };

  const profileBtn = useClick(showProfileMenu);

  return (
    <div className="menus">
      <div className="menu menu-title title">
        <Link to="/">マイライディング</Link>
      </div>
      <div className="menu menu-content menu-selected">
        <Link to="/">대시보드</Link>
      </div>
      <div className="menu menu-content">
        <Link to="/record">라이딩 일지</Link>
      </div>
      <div className="menu menu-content">
        <Link to="/route">라이딩 경로</Link>
      </div>
      <div className="profile">
        <Link to="/profile" className="profile-img"></Link>
        <div className="profile-btn" ref={profileBtn}></div>
        <div className="profile-menu">
          <p>회원정보</p>
          <p>로그아웃</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
