import React, { useState, useEffect } from "react";
import imageCompression from "browser-image-compression";
import basicProfile from "../../../img/img-basic-profile.png";

const SignupImg = ({ setImgFile }) => {
  const [imgFileUrl, setImgFileUrl] = useState("");

  const setImgState = (newImgFile, newImgFileUrl) => {
    setImgFile(newImgFile);
    setImgFileUrl(newImgFileUrl);
  };

  const setBasicProfile = () => {
    const url = basicProfile;
    new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        let canvas = document.createElement("canvas");
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        canvas.getContext("2d").drawImage(image, 0, 0);
        let uri = canvas.toDataURL("image/png");

        let arr = uri.split(","),
          type = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          { length } = bstr,
          u8arr = new Uint8Array(length);

        while (length--) {
          u8arr[length] = bstr.charCodeAt(length);
        }

        const file = new File([u8arr], "basicProfile", { type });
        setImgState(file, uri);
      };
      image.src = url;
    });
  };

  const onChangeImg = async ({ target }) => {
    const file = target.files[0];
    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 250,
    };

    try {
      const compressedImgFile = await imageCompression(file, options);
      const promise = imageCompression.getDataUrlFromFile(compressedImgFile);
      promise.then((result) => {
        setImgState(file, result);
      });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    setBasicProfile();
  }, []);

  return (
    <div className="sub">
      <div className="img-section">
        <div
          className="img"
          style={{
            background: `url(${imgFileUrl}) center/cover no-repeat`,
          }}
        ></div>
        <div className="btn-upload"></div>

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
    </div>
  );
};

export default SignupImg;
