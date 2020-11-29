import React, { useState } from "react";
import useClick from "../../hooks/useClick";
import useInput from "../../hooks/useInput";
import "./Signup.css";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

const Signup = ({ history }) => {
  const [warningMsg, setWarningMsg] = useState("");

  // <<-- 유효성 검사
  const msgs = {
    id: "아이디는 영문, 숫자 조합 6 ~ 15 글자로 입력해주세요.",
    password: "비밀번호는 문자, 숫자, 특수문자 조합 8자 이상 입력해주세요.",
    passwordConfirm: "비밀번호가 일치하지 않습니다.",
    nickName: "닉네임은 5 ~ 15 글자로 입력해주세요.",
  };
  const pattern = {
    id: /^[a-z]+[a-z0-9]{5,15}$/g,
    password: /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    nickName: /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{5,15}$/,
  }; // -->>

  // <<-- Hooks : useInput 등록
  const validateInputValue = {
    id: (value) => {
      const isCheckedId = pattern.id.test(value);
      isCheckedId ? setWarningMsg("") : setWarningMsg(msgs.id);
      return isCheckedId;
    },
    password: (value) => {
      const isCheckedPassword = pattern.password.test(value);
      isCheckedPassword ? setWarningMsg("") : setWarningMsg(msgs.password);
      return isCheckedPassword;
    },
    passwordConfirm: (value) => {
      const isCheckedPasswordConfirm = checkValue.password.value === value;
      isCheckedPasswordConfirm
        ? setWarningMsg("")
        : setWarningMsg(msgs.passwordConfirm);
      return isCheckedPasswordConfirm;
    },
    nickName: (value) => {
      const isCheckedNickName = pattern.nickName.test(value);
      isCheckedNickName ? setWarningMsg("") : setWarningMsg(msgs.nickName);
      return isCheckedNickName;
    },
  }; // -->>

  const checkValue = {
    id: useInput("", validateInputValue.id),
    password: useInput("", validateInputValue.password),
    passwordConfirm: useInput("", validateInputValue.passwordConfirm),
    nickName: useInput("", validateInputValue.nickName),
  }; // -->>

  // <<-- Hooks : useClick 등록
  const onSubmitHandler = () => {
    if (
      checkValue.id &&
      checkValue.password &&
      checkValue.passwordConfirm &&
      checkValue.nickName
    ) {
      axios
        .post(`${BASE_URL}/signup`, {
          id: checkValue.id.value,
          password: checkValue.password.value,
          passwordConfirm: checkValue.passwordConfirm.value,
          nickName: checkValue.nickName.value,
        })
        .then((res) => {
          if (res.status === 201) {
            alert(res.data.msg);
          } else {
            alert("알 수 없는 오류가 발생하였습니다.");
            return;
          }
        })
        .catch((err) => {
          if (err.response) {
            alert(err.response.data.msg);
            return;
          }
          alert("서버 연결에 실패하였습니다.");
          return;
        })
        .finally(() => {
          history.push("/");
        });
    } else {
      alert("입력하신 정보를 확인해주세요.");
    }
  };
  const onResetHandler = () => {
    checkValue.id.reset();
    checkValue.password.reset();
    checkValue.passwordConfirm.reset();
    checkValue.nickName.reset();
    setWarningMsg("");
  };
  const submitBtn = useClick(onSubmitHandler);
  const resetBtn = useClick(onResetHandler); // -->>

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
            <input type="text" placeholder="아이디" {...checkValue.id} />
            <i className="fas fa-user" />
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="비밀번호"
              {...checkValue.password}
            />
            <i className="fas fa-lock" />
          </div>
          <div className="password-check">
            <input
              type="password"
              placeholder="비밀번호 확인"
              {...checkValue.passwordConfirm}
            />
            <i className="fas fa-check-circle" />
          </div>
          <div className="nickname">
            <input type="text" placeholder="닉네임" {...checkValue.nickName} />
            <i className="fas fa-address-card" />
          </div>
        </div>
        <div className="bottom">
          <div className="warning-msg">
            <p>{warningMsg}</p>
          </div>
          <button className="signup-btn btn" ref={submitBtn}>
            회원가입
          </button>
          <button className="signupCancel-btn btn" ref={resetBtn}>
            다시입력
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
