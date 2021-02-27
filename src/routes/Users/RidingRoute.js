import React from "react";
import { Route } from "react-router-dom";
import RouteMain from "../../components/Users/RidingRoute/pages/Main";
import RouteShow from "../../components/Users/RidingRoute/pages/Show";
import RouteCreate from "../../components/Users/RidingRoute/pages/Create";
import RouteEdit from "../../components/Users/RidingRoute/pages/Edit";

const RidingRoute = () => {
  return (
    <>
      <Route path="/route" exact={true} component={RouteMain} />
      <Route path="/route/create/:id" component={RouteCreate} />
      <Route path="/route/edit/:id" component={RouteEdit} />
      <Route path="/route/:id" exact={true} component={RouteShow} />
    </>
  );
};

export default RidingRoute;
