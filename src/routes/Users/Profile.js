import React, { useState, useEffect } from "react";
import { getProfile } from "../../api/Auth";
import { getDateContext } from "../../util";
import "./Profile.css";

const Profile = () => {
  const [data, setData] = useState({
    user_account: "",
    user_nickname: "",
    user_picture: "",
    created_at: "",
  });
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    getProfile()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("Profile 조회에 실패하였습니다.");
      });
  }, []);
  const { user_account, user_nickname, user_picture, created_at } = data;
  return (
    <div className="profile">
      <div className="top">
        <div className="title">PROFILE</div>
        <div className="img-section">
          <div className="img"></div>
          {flag && (
            <div className="img-save">
              <p className="img-save-btn">프로필 사진 저장</p>
            </div>
          )}
          <div class="filebox">
            <label for="btn-upload"></label>
            <input type="file" id="btn-upload" />
          </div>
        </div>

        {/* {user_picture} */}
      </div>
      <div className="bottom">
        <ul>
          <li>
            <span className="title">아이디</span>
            <span className="value">{user_account}</span>
          </li>
          <li>
            <span className="title">비밀번호</span>
            <span className="value">변경</span>
          </li>
          <li>
            <span className="title">닉네임</span>
            <span className="value">{user_nickname}</span>
          </li>
          <li>
            <span className="title">가입일</span>
            <span className="value">
              {getDateContext({ date: created_at })}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
