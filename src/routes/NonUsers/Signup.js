import React, { useState } from "react";
import "./Signup.css";

import { requestSignup } from "../../api/Auth";

const Signup = ({ history }) => {
  const msgs = {
    default: "프로필 사진 미등록시, 기본 이미지로 저장됩니다.",
    id: "아이디는 영문, 숫자 조합 6 ~ 15 글자로 입력해주세요.",
    password: "비밀번호는 문자, 숫자, 특수문자 조합 8자 이상 입력해주세요.",
    passwordConfirm: "비밀번호가 일치하지 않습니다.",
    nickName: "닉네임은 5 ~ 15 글자로 입력해주세요.",
  };
  const patterns = {
    id: /^[a-z]+[a-z0-9]{5,15}$/g,
    // password: /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
    password: /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$/,
    nickName: /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{5,15}$/,
  };

  const [msg, setMsg] = useState(msgs.default);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickName, setNickName] = useState("");
  // TODO picture 수정하기

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
            ? setMsg(msgs.default)
            : setMsg(msgs.password);
          passwordConfirm === value
            ? setMsg(msgs.default)
            : setMsg(msgs.passwordConfirm);
          break;
        case "passwordConfirm":
          password === value
            ? setMsg(msgs.default)
            : setMsg(msgs.passwordConfirm);
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
    requestSignup({
      user_account: id,
      user_password: password,
      user_password_confirmation: passwordConfirm,
      user_nickname: nickName,
      user_picture: "picture",
    })
      .then((res) => {
        const { message } = res;
        alert(message);
        // FIXME 회원가입 후 토큰 저장여부 확인
        history.push("/");
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
        history.push("/");
      });
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
          <input
            className="signupCancel-btn btn"
            type="reset"
            value="다시입력"
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
