import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="login">
      <div className="img-section">
        <div className="img"></div>
        <div className="upload-btn"></div>
      </div>

      <div className="login-section">
        <div className="login-header">
          <p className="title">LOGIN</p>
          <p className="subTitle">
            <span>회원가입 안전한 라이딩을 위한 </span>
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
    </div>
  );
}

export default SignUp;
