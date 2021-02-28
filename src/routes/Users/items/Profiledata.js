import React from "react";
import { getDateKorContext } from "../../../util/getDateContext";

const ProfileData = ({ data, setModalIsOpen }) => {
  const { user_account, user_nickname, created_at } = data;
  const onClickHandler = () => {
    setModalIsOpen(true);
  };

  return (
    <div className="bottom">
      <ul>
        <li>
          <span className="title">아이디</span>
          <span className="value">{user_account}</span>
        </li>
        <li>
          <span className="title">비밀번호</span>
          <span className="value">
            <button className="btn-password-update" onClick={onClickHandler}>
              변경
            </button>
          </span>
        </li>
        <li>
          <span className="title">닉네임</span>
          <span className="value">{user_nickname}</span>
        </li>
        <li>
          <span className="title">가입일</span>
          <span className="value">
            {getDateKorContext({ date: created_at })}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileData;
