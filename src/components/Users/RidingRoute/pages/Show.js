import React, { useState, useEffect } from "react";
import { getRidingRouteById } from "../../../../api/RidingRoute";
import RouterShowData from "../items/Show/RouterShowData";
import RouterShowHeader from "../items/Show/RouterShowHeader";

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
        const { route, record, rankvalue } = res.data;
        console.log(res.data);
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
        });
      })
      .catch((err) => {
        alert("경로 정보 조회에 실패하였습니다.");
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
      <RouterShowHeader data={header} />
      <RouterShowData data={data} />
    </div>
  );
};

export default Show;
