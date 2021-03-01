import React from "react";
import { Route } from "react-router-dom";
import RouteMain from "../../components/Users/RidingRoute/pages/Main";
import RouteShow from "../../components/Users/RidingRoute/pages/Show";
import RouteCreate from "../../components/Users/RidingRoute/pages/Create";

const RidingRoute = () => {
  return (
    <>
      <Route path="/route" exact={true} component={RouteMain} />
      <Route path="/route/show/:id" component={RouteShow} />
      <Route path="/route/create/:id" component={RouteCreate} />
    </>
  );
};

export default RidingRoute;
