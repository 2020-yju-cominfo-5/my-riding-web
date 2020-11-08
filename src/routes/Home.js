import React from "react";
import DashBoard from "../components/Home/DashBoard";
import Login from "../components/Home/Login";
import "./Home.css";

function Home() {
  // TODO check login
  const isLogin = localStorage.getItem("isLogin");
  return <div className="home">{isLogin ? <DashBoard /> : <Login />}</div>;
}

export default Home;
