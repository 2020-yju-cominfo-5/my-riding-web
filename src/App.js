import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import NoneUsers from "./components/NonUsers/NonUsers";
import Users from "./components/Users/Users";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation token={token} />
        {token ? <Users /> : <NoneUsers />}
      </BrowserRouter>
    </div>
  );
};

export default App;
