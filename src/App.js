import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./routes/Home";
import RidingRecord from "./routes/RidingRecord";
import RidingRoute from "./routes/RidingRoute";
import Profile from "./routes/Profile";
import SignUp from "./components/Home/SignUp";

// TODO check login
localStorage.setItem("isLogin", true);
localStorage.removeItem("isLogin");

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/record" component={RidingRecord} />
        <Route path="/route" component={RidingRoute} />
        <Route path="/profile" component={Profile} />
        <Route path="/signup" component={SignUp} />
      </BrowserRouter>
    </div>
  );
}

export default App;
