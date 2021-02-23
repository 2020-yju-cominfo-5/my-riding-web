import React from "react";
import { Link } from "react-router-dom";

const LoginFormSub = () => {
  return (
    <div className="sub">
      <div className="title">라이더님, 안녕하세요!</div>
      <div className="body">아직 회원이 아니신가요?</div>
      <Link to="/signup" className="toSignup-btn btn">
        회원가입
      </Link>
    </div>
  );
};

export default LoginFormSub;
