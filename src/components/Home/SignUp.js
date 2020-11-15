import React from "react";
import { Redirect } from "react-router-dom";
import "../../style/Home/SignUp.css";

function SignUp() {
  // TODO check login
  const isLogin = localStorage.getItem("isLogin");
  if (isLogin) {
    return <Redirect path="*" to="/" />;
  }

  return (
    <div className="signup">
      <div className="img-section">
        <div className="img-wrapper">
          <div className="img"></div>
          <div className="upload-btn"></div>
        </div>
      </div>

      <div className="signup-section">
        <div className="signup-header">
          <p className="title">SIGN UP</p>
        </div>
        <div className="signup-form">
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
        </div>
        <div className="signup-bottom">
          <p className="signup-msg">
            아이디는 영어 + 숫자 조합 8 ~ 15자만 입력 가능합니다.
          </p>
          <button className="signup-btn">회원가입</button>
          <button className="signupCancel-btn">다시입력</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
