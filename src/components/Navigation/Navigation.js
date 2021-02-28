import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { requestAuth } from "../../api/Auth";
import NavTitle from "./NavTitle";
import Menu from "./Menu";
import "./Navigation.css";

const Navigation = ({ token }) => {
  const location = useLocation();
  const [img, setImg] = useState();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      requestAuth()
        .then((res) => {
          setImg(res.data.user_picture);
        })
        .catch((err) => {
          if (!err.response) {
            alert("서버와의 연결에 실패하였습니다.");
            return;
          }
          const { status } = err.response;
          switch (status) {
            case 401:
              alert(
                "본인인증 실패 : 잘못된 접근 또는 인증토큰이 만료되었습니다.",
              );
              localStorage.removeItem("token");
              window.location.replace("/");
              break;
            default:
              alert("서버와의 연결에 실패하였습니다.");
              break;
          }
        });
    }
  }, [location, token]);

  return (
    <div className="navigation">
      <div className="wrapper">{token ? <Menu img={img} /> : <NavTitle />}</div>
    </div>
  );
};

export default Navigation;
