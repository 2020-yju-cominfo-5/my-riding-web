import React, { useState } from "react";

import { requestSignup } from "../../../api/Auth";
import { getSignupMsgs } from "../../../util/getMsgs";
import getRegPatterns from "../../../util/getRegPatterns";

const SignupForm = ({ imgFile }) => {
  const msgs = getSignupMsgs;
  const patterns = getRegPatterns();

  console.log(imgFile);
  const [msg, setMsg] = useState(msgs.default);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickName, setNickName] = useState("");
  // TODO picture 수정하기

  // FIXME PasswordUpdate 참고 수정 필요!!
  const inputHandler = {
    required: "on",
    autoComplete: "off",
    onChange: ({ target }) => {
      const { name, value } = target;
      name === "id" && setId(value);
      name === "password" && setPassword(value);
      name === "passwordConfirm" && setPasswordConfirm(value);
      name === "nickName" && setNickName(value);
    },
    onBlur: ({ target }) => {
      const { name, value } = target;
      switch (name) {
        case "id":
          patterns.id.test(value) ? setMsg(msgs.default) : setMsg(msgs.id);
          break;
        case "password":
          patterns.password.test(value)
            ? passwordConfirm === value
              ? setMsg(msgs.default)
              : setMsg(msgs.passwordConfirm)
            : setMsg(msgs.password);
          break;
        case "passwordConfirm":
          patterns.password.test(value)
            ? password === value
              ? setMsg(msgs.default)
              : setMsg(msgs.passwordConfirm)
            : setMsg(msgs.password);
          break;
        case "nickName":
          patterns.nickName.test(value)
            ? setMsg(msgs.default)
            : setMsg(msgs.nickName);
          break;
        default:
          break;
      }
    },
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // FIXME api 수정 시, 프로필 이미지 추가 전송

    const formData = new FormData();
    formData.append("user_account", id);
    formData.append("user_password", password);
    formData.append("user_password_confirmation", passwordConfirm);
    formData.append("user_nickname", nickName);
    formData.append("user_picture", imgFile);

    requestSignup(formData)
      .then((res) => {
        const { message } = res;
        alert(message);
      })
      .catch((err) => {
        if (!err.response) {
          alert("서버와의 연결에 실패하였습니다.");
          return;
        }

        const { status, data } = err.response;
        switch (status) {
          case 422:
            const { error } = data.data;
            if (error) {
              if (
                error.user_account &&
                error.user_account.includes(
                  "The user account has already been taken.",
                )
              ) {
                alert("이미 등록된 사용자입니다.");
                setId("");
                return;
              } else if (
                error.user_nickname &&
                error.user_nickname.includes(
                  "The user nickname has already been taken.",
                )
              ) {
                alert("이미 등록된 닉네임입니다.");
                setNickName("");
                return;
              }
            }
            alert("유효하지 않은 입력 값입니다.");
            break;
          default:
            alert("서버와의 연결에 실패하였습니다.");
            break;
        }
      })
      .finally(() => {
        window.location.replace("/");
      });
  };
  return (
    <div className="main">
      <div className="header">
        <div className="title">SIGN UP</div>
      </div>
      <form onSubmit={onSubmitHandler}>
        <div className="id">
          <input
            type="text"
            placeholder="아이디"
            name="id"
            {...inputHandler}
            value={id}
            minLength={6}
            maxLength={15}
          />
          <i className="fas fa-user" />
        </div>
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
        <div className="nickname">
          <input
            type="text"
            placeholder="닉네임"
            name="nickName"
            {...inputHandler}
            value={nickName}
            minLength={5}
            maxLength={15}
          />
          <i className="fas fa-address-card" />
        </div>
        <div className="bottom">
          <div className="warning-msg">{msg}</div>
        </div>
        <input className="signup-btn btn" type="submit" value="회원가입" />
        <input className="signupCancel-btn btn" type="reset" value="다시입력" />
      </form>
    </div>
  );
};

export default SignupForm;
