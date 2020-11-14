import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login-section">
        <div className="login-header">
          <p className="title">LOGIN</p>
          <p className="subTitle">
            <span>당신의 안전한 라이딩을 위한 </span>
            <span>My Riding</span>
          </p>
        </div>
        <div className="login-social">
          <div className="icons">
            <div className="icon">
              <i className="fab fa-facebook-f"></i>
            </div>
            <div className="icon">
              <i className="fab fa-google"></i>
            </div>
          </div>
        </div>
        <div className="login-form">
          <div className="id">
            <input type="text" placeholder="아이디" />
            <i className="fas fa-user"></i>
          </div>
          <div className="password">
            <input type="password" placeholder="비밀번호" />
            <i className="fas fa-lock"></i>
          </div>
        </div>
        <div className="login-bottom">
          <Link to="/">
            <p className="login-reset">비밀번호를 잊으셨나요?</p>
          </Link>
          <button className="login-btn">로그인</button>
        </div>
      </div>
      <div className="signup-section">
        <p className="signup-title">라이더님, 안녕하세요!</p>
        <p className="signup-body">아직 회원이 아니신가요?</p>
        <Link to="/signup" className="signup-btn">
          회원가입
        </Link>
      </div>
    </div>
  );
}

export default Login;
