import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="main">
        <div className="header">
          <div className="title">LOGIN</div>
          <div className="sub-title">
            <span>당신의 안전한 라이딩을 위한 </span>
            <span>My Riding</span>
          </div>
          <div className="login-icons">
            <div className="icon">
              <i className="fab fa-facebook-f" />
            </div>
            <div className="icon">
              <i className="fab fa-google" />
            </div>
          </div>
        </div>
        <form className="login">
          <div className="id">
            <input type="text" placeholder="아이디" />
            <i className="fas fa-user" />
          </div>
          <div className="password">
            <input type="password" placeholder="비밀번호" />
            <i className="fas fa-lock" />
          </div>
        </form>
        <div className="bottom">
          <Link to="/" className="password-reset">
            비밀번호를 잊으셨나요?
          </Link>
          <button className="login-btn">로그인</button>
        </div>
      </div>
      <div className="sub">
        <div className="title">라이더님, 안녕하세요!</div>
        <div className="body">아직 회원이 아니신가요?</div>
        <Link to="/signup" className="btn">
          회원가입
        </Link>
      </div>
    </div>
  );
}

export default Login;
