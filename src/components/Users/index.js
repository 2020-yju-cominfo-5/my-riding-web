import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import RidingRecord from "./RidingRecord";
import RidingRoute from "./RidingRoute";
import Profile from "./Profile";

import "./index.css";

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
