import React from "react";
import DashBoard from "../components/Home/DashBoard";
import Login from "../components/Home/Login";

function Home() {
  // TODO check login
  const isLogin = localStorage.getItem("isLogin");

  return <>{isLogin ? <DashBoard /> : <Login />}</>;
}

export default Home;
