import React from "react";
import { Route } from "react-router-dom";
import RouteMain from "../../components/Users/RidingRoute/Main";
import RouteShow from "../../components/Users/RidingRoute/Show";
import RouteCreate from "../../components/Users/RidingRoute/Create";
import RouteEdit from "../../components/Users/RidingRoute/Edit";

const RidingRoute = () => {
  return (
    <>
      <Route path="/route" exact={true} component={RouteMain} />
      <Route path="/route/:id" component={RouteShow} />
      <Route path="/route/create" component={RouteCreate} />
      <Route path="/route/edit/:id" component={RouteEdit} />
    </>
  );
};

export default RidingRoute;
