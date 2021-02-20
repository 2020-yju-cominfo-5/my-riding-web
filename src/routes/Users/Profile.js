import React, { useState, useEffect } from "react";
import { getProfile, updateProfileImg } from "../../api/Auth";
import { getDateContext } from "../../util";
import imageCompression from "browser-image-compression";
import "./Profile.css";

const Profile = () => {
  const [data, setData] = useState({
    user_account: "",
    user_nickname: "",
    user_picture: "",
    created_at: "",
  });
  const [imgFlag, setImgFlag] = useState(false);
  const [imgFile, setImgFile] = useState(null);
  const [imgFileUrl, setImgFileUrl] = useState("");
  const { user_account, user_nickname, created_at } = data;

  useEffect(() => {
    getProfile()
      .then((res) => {
        setData(res.data);
        // XXX setImgFileUrl 확인 필요
        setImgFileUrl(res.data.user_picture);
      })
      .catch((err) => {
        console.log("Profile 조회에 실패하였습니다.");
      });
  }, []);

  const onChangeImg = async ({ target }) => {
    const file = target.files[0];
    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 250,
    };

    try {
      const compressedImgFile = await imageCompression(file, options);
      setImgFile(file);
      const promise = imageCompression.getDataUrlFromFile(compressedImgFile);
      promise.then((result) => {
        setImgFileUrl(result);
      });
      setImgFlag(true);
    } catch (error) {
      alert(error);
    }
  };
  const onImgSubmitHandler = () => {
    if (imgFlag) {
      updateProfileImg(imgFile);
      // .then(() => {
      //   alert("프로필 사진 변경을 성공하였습니다.");
      // })
      // .catch(() => {
      //   alert("프로필 사진 변경을 실패하였습니다.");
      // });
    } else {
      alert("새로 고침 후, 다시 변경바랍니다.");
    }
  };

  return (
    <div className="profile">
      <div className="top">
        <div className="title">PROFILE</div>
        <div className="img-section">
          <div
            className="img"
            style={{
              background: `url(${imgFileUrl}) center/cover no-repeat`,
            }}
          ></div>
          {imgFlag && (
            <>
              <button
                className="img-save"
                onClick={onImgSubmitHandler}
              ></button>
            </>
          )}
          <div className="filebox">
            <label htmlFor="btn-upload"></label>
            <input
              type="file"
              accept="image/gif, image/jpeg, image/jpg, image/png"
              id="btn-upload"
              onChange={onChangeImg}
            />
          </div>
        </div>
        <p className="img-txt">
          {imgFlag
            ? "변경된 프로필 사진을 눌러 저장할 수 있습니다."
            : "카메라 아이콘으로 프로필 사진을 변경할 수 있습니다."}
        </p>
      </div>
      <div className="bottom">
        <ul>
          <li>
            <span className="title">아이디</span>
            <span className="value">{user_account}</span>
          </li>
          <li>
            <span className="title">비밀번호</span>
            <span className="value">
              <button className="btn-password-update">변경</button>
            </span>
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
