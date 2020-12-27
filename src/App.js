import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import NoneUsers from "./components/NonUsers/NonUsers";
import Users from "./components/Users/Users";

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
