import React, { useState, useEffect } from "react";
import { getProfile } from "../../api/Auth";

const Profile = () => {
  const [data, setData] = useState({
    user_account: "",
    user_nickname: "",
    user_picture: "",
    created_at: "",
  });
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
    <>
      프로파일 페이지 입니다.
      {user_account}
      {user_nickname}
      {user_picture}
      {created_at}
    </>
  );
};

export default Profile;
