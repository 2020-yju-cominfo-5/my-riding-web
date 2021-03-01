import React from "react";
import { Link } from "react-router-dom";
import { requestLogout } from "../../api/Auth";

const Menu = ({ img }) => {
  const onClickHandler = () => {
    requestLogout().finally(() => {
      localStorage.removeItem("token");
      window.location.replace("/");
    });
  };

  return (
    <>
      <Link to="/" className="nav-title">
        マイライディング
      </Link>
      <div className="nav-menus">
        <Link to="/" className="nav-menu">
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
        <Link
          to="/profile"
          className="img"
          style={{
            // background: `url(data:${img}) center/cover no-repeat`,
            background: `url(${img}) center/cover no-repeat`,
          }}
        />
        <div className="dropdown"></div>
        <button onClick={onClickHandler} className="logout">
          로그아웃
        </button>
      </div>
    </>
  );
};

export default Menu;
