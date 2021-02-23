import React from "react";
import LoginForm from "./items/LoginForm";
import LoginFormSub from "./items/LoginFormSub";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <LoginForm />
      <LoginFormSub />
    </div>
  );
};

export default Login;
