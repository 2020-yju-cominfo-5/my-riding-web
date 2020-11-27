import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import NoneUsers from "./components/NonUsers";
import Users from "./components/Users";

const App = () => {
  localStorage.setItem("isLogin", true);
  // localStorage.removeItem("isLogin");
  const isLogin = localStorage.getItem("isLogin");

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        {isLogin ? <Users /> : <NoneUsers />}
      </BrowserRouter>
    </div>
  );
};

export default App;
