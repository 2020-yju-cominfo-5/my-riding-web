import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "../../routes/NonUsers/Login";
import Signup from "../../routes/NonUsers/Signup";
import "./NonUsers.css";

const NoneUsers = () => {
  return (
    <div className="non-users">
      <Route path="/" exact={true} component={Login} />
      <Route path="/signup" component={Signup} />
      <Redirect path="*" to="/" />
    </div>
  );
};

export default NoneUsers;
