import React from "react";
import { Route } from "react-router-dom";
import RecordHome from "../../components/Users/RidingRecord/Main";
import RecordList from "../../components/Users/RidingRecord/List";
import RecordShow from "../../components/Users/RidingRecord/Show";

const RidingRecord = () => {
  return (
    <>
      <Route path="/record" exact={true} component={RecordHome} />
      <Route path="/record/week/:week" component={RecordList} />
      <Route path="/record/show/:id" component={RecordShow} />
    </>
  );
};

export default RidingRecord;
