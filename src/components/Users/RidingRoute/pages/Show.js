import React, { useState, useEffect } from "react";
import { getRidingRouteById } from "../../../../api/RidingRoute";
import getPathData from "../../../../util/getPathData";
import RouteShowData from "../items/Show/RouteShowData";
import RouteShowHeader from "../items/Show/RouteShowHeader";

import "./Show.css";

const Show = ({ match }) => {
  const { id } = match.params;
  const [data, setData] = useState({
    name: "",
    like: 0,
    usrCount: 0,
    tryCount: 0,
    distacne: 0,
    time: 0,
    grade: 0,
    minAlt: 0,
    maxAlt: 0,
    myRank: 0,
    myBestRecord: 0,
    myAvgRecord: 0,
    topRankerAccount: "",
    topRankerRecord: 0,
    rank: [],
  });
  useEffect(() => {
    getRidingRouteById(id)
      .then((res) => {
        const { route, routedata, record, rankvalue } = res.data;
        setData({
          name: route[0].route_title,
          like: route[0].route_like,
          usrCount: route[0].route_num_of_try_user,
          tryCount: route[0].route_num_of_try_count,
          distacne: route[0].route_distance,
          time: route[0].route_time,
          grade: route[0].route_avg_degree,
          minAlt: route[0].route_max_altitude,
          maxAlt: route[0].route_min_altitude,
          myRank: rankvalue.record_user_rank,
          myBestRecord: rankvalue.record_user_top,
          myAvgRecord: rankvalue.record_user_avg,
          topRankerAccount: rankvalue.record_top_score_user_account,
          topRankerRecord: rankvalue.record_top_score_user_time,
          rank: record,
          path: getPathData(routedata, "points"),
        });
      })
      .catch((err) => {
        alert("경로 정보 조회에 실패하였습니다.");
        window.location.replace("/route/show");
      });
  }, []);
  const header = {
    name: data.name,
    like: data.like,
    usrCount: data.usrCount,
    tryCount: data.tryCount,
  };

  return (
    <div className="route-show">
      <RouteShowHeader data={header} />
      <RouteShowData data={data} />
    </div>
  );
};

export default Show;
