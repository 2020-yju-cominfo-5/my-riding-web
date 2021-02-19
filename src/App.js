import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import NoneUsers from "./components/NonUsers/NonUsers";
import Users from "./components/Users/Users";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation auth={{ isLogin, setIsLogin }} />
        {localStorage.getItem("token") ? <Users /> : <NoneUsers />}
      </BrowserRouter>
    </div>
  );
};

export default App;
