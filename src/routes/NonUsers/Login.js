import React, { useState } from "react";
import { Link } from "react-router-dom";
import { requestLogin } from "../../api/Auth";
import "./Login.css";

const Login = ({ history }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const inputHandler = {
    required: "on",
    autoComplete: "off",
    onChange: ({ target }) => {
      const { name, value } = target;
      name === "id" && setId(value);
      name === "password" && setPassword(value);
    },
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    requestLogin({
      user_account: id,
      user_password: password,
    })
      .then((res) => {
        const {
          message,
          data: { token },
        } = res;
        localStorage.setItem("token", token);
        alert(message);
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
            // alert("유효하지 않은 입력 값입니다.");
            alert(data.message);
            break;
          case 401:
            // FIXME 아이디, 비밀번호 틀림 -> HTTP STATUS CODE 수정 필요
            // 422 -> 401
            // alert(data.message);
            break;
          default:
            alert("서버와의 연결에 실패하였습니다.");
            break;
        }
      });
  };
  return (
    <div className="login">
      <div className="main">
        <div className="header">
          <div className="title">LOGIN</div>
          <div className="sub-title">
            <span>당신의 안전한 라이딩을 위한 </span>
            <span>My Riding</span>
          </div>
          <div className="login-icons">
            <div className="icon">
              <i className="fab fa-facebook-f" />
            </div>
            <div className="icon">
              <i className="fab fa-google" />
            </div>
          </div>
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
            <i className="fas fa-user"></i>
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
          <div className="bottom">
            <Link to="/" className="password-reset">
              비밀번호를 잊으셨나요?
            </Link>
            <input type="submit" className="login-btn btn" value="로그인" />
          </div>
        </form>
      </div>
      <div className="sub">
        <div className="title">라이더님, 안녕하세요!</div>
        <div className="body">아직 회원이 아니신가요?</div>
        <Link to="/signup" className="toSignup-btn btn">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default Login;
