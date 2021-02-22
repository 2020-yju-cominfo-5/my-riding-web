import React from "react";
import { Route } from "react-router-dom";
import RecordMain from "../../components/Users/RidingRecord/pages/Main";
import RecordList from "../../components/Users/RidingRecord/pages/List";
import RecordShow from "../../components/Users/RidingRecord/pages/Show";

const RidingRecord = () => {
  return (
    <>
      <Route path="/record" exact={true} component={RecordMain} />
      <Route path="/record/week/:year/:week" component={RecordList} />
      <Route path="/record/show/:id" component={RecordShow} />
    </>
  );
};

export default RidingRecord;
