import React, { useState } from "react";
import imageCompression from "browser-image-compression";
import { updateProfileImg } from "../../../api/Auth";

const ProfileImg = ({ img }) => {
  const [imgFlag, setImgFlag] = useState(false);
  const [imgFile, setImgFile] = useState(null);
  const [imgFileUrl, setImgFileUrl] = useState(img);

  const onClickImgSubmit = () => {
    if (imgFlag) {
      updateProfileImg(imgFile)
        .then(() => {
          // TODO 새로고침 필요한지 렌더링 확인 필요
          alert("프로필 사진 변경을 성공하였습니다.");
        })
        .catch(() => {
          alert("프로필 사진 변경을 실패하였습니다.");
        });
    } else {
      alert("새로 고침 후, 다시 시도바랍니다.");
    }
  };

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

  return (
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
            <button className="img-save" onClick={onClickImgSubmit}></button>
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
  );
};

export default ProfileImg;
