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
        <div className="img-wrapper">
          <div className="img"></div>
          <div className="upload-btn"></div>
        </div>
      </div>
      <div className="profileInfo-section"></div>
    </div>
  );
}

export default Profile;
