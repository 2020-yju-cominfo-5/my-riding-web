import React from "react";
import { Redirect } from "react-router-dom";

import "./Signup.css";

function Signup() {
  return (
    <div className="signup">
      <div className="sub">
        <div className="img-wrapper">
          <div className="img-profile"></div>
          <div className="btn-upload"></div>
        </div>
      </div>
      <div className="main">
        <div className="header">
          <div className="title">SIGN UP</div>
        </div>
        <form className="signup">
          <div className="id">
            <input type="text" placeholder="아이디" />
            <i className="fas fa-user" />
          </div>
          <div className="password">
            <input type="password" placeholder="비밀번호" />
            <i className="fas fa-lock" />
          </div>
          <div className="password-check">
            <input type="password" placeholder="비밀번호 확인" />
            <i className="fas fa-check" />
          </div>
          <div className="nickname">
            <input type="text" placeholder="닉네임" />
            <i className="fas fa-signature" />
          </div>
        </form>
        <div className="bottom">
          <div className="warning-msg">
            아이디는 영어 + 숫자 조합 8 ~ 15자만 입력 가능합니다.
          </div>
          <button className="signup-btn">회원가입</button>
          <button className="signupCancel-btn">다시입력</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
