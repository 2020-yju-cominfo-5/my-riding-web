import React, { useState } from "react";
import Modal from "react-modal";
import { updatePassword } from "../../../api/Auth";
import getRegPatterns from "../../../util/getRegPatterns";
import "./PasswordUpdate.css";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    border: "none",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
  },
};

const PasswordUpdate = ({ controller }) => {
  const { modalIsOpen, setModalIsOpen } = controller;
  if (!modalIsOpen) {
    return <></>;
  }

  // TODO CSS 수정 필요, 비밀번호 수정 버튼 및 API 연결
  // FIXME Signup.js 와 refactoring 필요...
  const msgs = {
    default: "변경할 비밀번호를 입력해주세요.",
    password: "문자, 숫자, 특수문자 조합 8자 이상",
    passwordConfirm: "비밀번호가 일치하지 않습니다.",
    success: "저장을 눌러 비밀번호를 변경해주세요.",
  };
  const passwordPattern = getRegPatterns("password");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [msg, setMsg] = useState(msgs.default);

  const inputHandler = {
    required: "on",
    autoComplete: "off",
    onChange: ({ target }) => {
      const { name, value } = target;
      name === "password" && setPassword(value);
      name === "passwordConfirm" && setPasswordConfirm(value);
    },
    onBlur: ({ target }) => {
      const { name, value } = target;
      switch (name) {
        case "password":
          passwordPattern.test(value)
            ? passwordConfirm === value
              ? setMsg(msgs.success)
              : setMsg(msgs.passwordConfirm)
            : setMsg(msgs.password);
          break;
        case "passwordConfirm":
          passwordPattern.test(value)
            ? password === value
              ? setMsg(msgs.success)
              : setMsg(msgs.passwordConfirm)
            : setMsg(msgs.password);
          break;
        default:
          break;
      }
    },
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    updatePassword(password, passwordConfirm)
      .then(() => {
        alert("비밀번호 변경에 성공하였습니다.");
        closeModal();
      })
      .catch(() => {
        alert("비밀번호 변경에 실패하였습니다.");
      });
  };

  return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Related Project"
      >
        <form className="password-update" onSubmit={onSubmitHandler}>
          <div className="title">비밀번호 변경</div>
          <div className="password">
            <input
              type="password"
              placeholder="비밀번호"
              name="password"
              {...inputHandler}
              value={password}
              minLength={8}
            />
            <i className="fas fa-lock" />
          </div>
          <div className="password-check">
            <input
              type="password"
              placeholder="비밀번호 확인"
              name="passwordConfirm"
              {...inputHandler}
              value={passwordConfirm}
              minLength={8}
            />
            <i className="fas fa-check-circle" />
          </div>
          <div className="warning-msg">{msg}</div>
          <input className="password-update-btn" type="submit" value="저장" />
        </form>
      </Modal>
  );
};

export default PasswordUpdate;
