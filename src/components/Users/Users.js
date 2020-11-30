import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Dashboard from "../../routes/Users/Dashboard";
import RidingRecord from "../../routes/Users/RidingRecord";
import RidingRoute from "../../routes/Users/RidingRoute";
import Profile from "../../routes/Users/Profile";
import "./Users.css";

const Users = () => {
  return (
    <div className="users">
      <Switch>
        <Route path="/" exact={true} component={Dashboard} />
        <Route path="/record" component={RidingRecord} />
        <Route path="/route" component={RidingRoute} />
        <Route path="/Profile" component={Profile} />
        <Redirect path="*" to="/" />
      </Switch>
    </div>
  );
};

export default Users;
