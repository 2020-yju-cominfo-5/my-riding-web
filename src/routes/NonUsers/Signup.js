import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickName, setNickName] = useState("");
  const [warningMsg, setWarningMsg] = useState("");
  const msgs = {
    id: "아이디는 영문, 숫자 조합 5 ~ 15 글자로 입력해주세요.",
    password: "비밀번호는 문자, 숫자, 특수문자 조합 8자이상 입력해주세요.",
    passwordConfirm: "비밀번호가 일치하지 않습니다.",
    nickName: "닉네임은 5 ~ 20 글자로 입력해주세요.",
  };
  const pattern = {
    id: /^[a-z]+[a-z0-9]{5,15}$/g,
    password: /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    nickName: /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{5,20}$/,
  };

  const validateInputValue = {
    id: (value) => {
      const isCheckedId = !pattern.id.test(value);
      isCheckedId ? setWarningMsg(msgs.id) : setWarningMsg("");
      return isCheckedId;
    },
    password: (value) => {
      const isCheckedPassword = !pattern.password.test(value);
      isCheckedPassword ? setWarningMsg(msgs.password) : setWarningMsg("");
      return isCheckedPassword;
    },
    passwordConfirm: (value) => {
      const isCheckedPasswordConfirm = !(password === value);
      isCheckedPasswordConfirm
        ? setWarningMsg(msgs.passwordConfirm)
        : setWarningMsg("");
      return isCheckedPasswordConfirm;
    },
    nickName: (value) => {
      const isCheckedNickName = !pattern.nickName.test(value);
      isCheckedNickName ? setWarningMsg(msgs.nickName) : setWarningMsg("");
      return isCheckedNickName;
    },
  };

  const onChangeId = ({ target }) => {
    validateInputValue.id(target.value);
    setId(target.value);
  };
  const onChangePassword = ({ target }) => {
    validateInputValue.password(target.value);
    setPassword(target.value);
  };
  const onChangePasswordConfirm = ({ target }) => {
    validateInputValue.passwordConfirm(target.value);
    setPasswordConfirm(target.value);
  };
  const onChangeNickName = ({ target }) => {
    validateInputValue.nickName(target.value);
    setNickName(target.value);
  };

  // TODO 동작과정 확인 필요
  const checkInputValues = () => {
    validateInputValue.id(id) &&
      validateInputValue.password(password) &&
      validateInputValue.passwordConfirm(passwordConfirm) &&
      validateInputValue.nickName(nickName);
  };

  const resetInputValue = () => {
    setId("");
    setPassword("");
    setPasswordConfirm("");
    setNickName("");
    setWarningMsg("");
  };

  return (
    <div className="signup">
      <div className="sub">
        <div className="img-wrapper">
          <div className="img-profile"></div>
          <div className="btn-upload"></div>
        </div>
      </div>
      <div className="main">
        <div className="header">
          <div className="title">SIGN UP</div>
        </div>
        <div className="form">
          <div className="id">
            <input
              type="text"
              placeholder="아이디"
              value={id}
              onChange={onChangeId}
            />
            <i className="fas fa-user" />
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={onChangePassword}
            />
            <i className="fas fa-lock" />
          </div>
          <div className="password-check">
            <input
              type="password"
              placeholder="비밀번호 확인"
              value={passwordConfirm}
              onChange={onChangePasswordConfirm}
            />
            <i className="fas fa-check-circle" />
          </div>
          <div className="nickname">
            <input
              type="text"
              placeholder="닉네임"
              value={nickName}
              onChange={onChangeNickName}
            />
            <i className="fas fa-address-card" />
          </div>
        </div>
        <div className="bottom">
          <div className="warning-msg">
            <p>{warningMsg}</p>
          </div>
          <button className="signup-btn btn" onClick={checkInputValues}>
            회원가입
          </button>
          <button className="signupCancel-btn btn" onClick={resetInputValue}>
            다시입력
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
