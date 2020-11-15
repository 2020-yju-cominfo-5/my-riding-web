import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  localStorage.setItem("isLogin", true);
  // localStorage.removeItem("isLogin");

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
