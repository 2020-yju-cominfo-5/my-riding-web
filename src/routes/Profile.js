import React from "react";
import { Redirect } from "react-router-dom";
import "../style/routes/Profile.css";

function Profile() {
  // TODO check login
  const isLogin = localStorage.getItem("isLogin");
  if (!isLogin) {
    return <Redirect path="*" to="/" />;
  }

  return (
    <div className="profile">
      <div className="profileImg-section">
        <div className="profileImg-title">PROFILE</div>
        <div className="img-wrapper">
          <div className="img"></div>
          <div className="upload-btn"></div>
        </div>
      </div>
      <div className="profileInfo-section">
        <ul className="profileInfo-wrapper">
          <li>
            <span className="profile-txt">아이디</span>
            <span className="profile-id profileInfo">tyj01103</span>
          </li>
          <li>
            <span className="profile-txt">비밀번호</span>
            <button className="profileChange-btn">변경</button>
          </li>
          <li>
            <span className="profile-txt">닉네임</span>
            <span className="profile-nickname profileInfo">정재순</span>
          </li>
          <li>
            <span className="profile-txt">가입일</span>
            <span className="profile-date profileInfo">2020. 11. 02.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
