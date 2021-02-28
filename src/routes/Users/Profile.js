import React, { useState, useEffect } from "react";
import PasswordUpdate from "./items/PasswordUpdate";
import { getProfile } from "../../api/Auth";
import "./Profile.css";
import ProfileData from "./items/Profiledata";
import ProfileImg from "./items/ProfileImg";

const Profile = () => {
  const [data, setData] = useState({
    user_account: "",
    user_nickname: "",
    user_picture: "",
    created_at: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    getProfile()
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(() => {
        console.log("Profile 조회에 실패하였습니다.");
      });
  }, []);

  return (
    <div className="profile">
      {modalIsOpen && (
        <PasswordUpdate controller={{ modalIsOpen, setModalIsOpen }} />
      )}
      {data.user_picture && <ProfileImg img={data.user_picture} />}
      <ProfileData data={data} setModalIsOpen={setModalIsOpen} />
    </div>
  );
};

export default Profile;
