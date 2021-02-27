import React from "react";
import RouteShowInfoOverview from "./RouteShowInfoOverview";
import RouteShowInfoDetail from "./RouteShowInfoDetail";
import RouteShowRank from "./RouteShowRank";

const RouteShowData = ({ data }) => {
  const overview = {
    distacne: data.distacne,
    time: data.time,
    grade: data.grade,
    minAlt: data.minAlt,
    maxAlt: data.maxAlt,
  };
  const detail = {
    myRank: data.myRank,
    usrCount: data.usrCount,
    myBestRecord: data.myBestRecord,
    myAvgRecord: data.myAvgRecord,
    topRankerAccount: data.topRankerAccount,
    topRankerRecord: data.topRankerRecord,
  };
  const { rank } = data;

  return (
    <div className="section">
      <div className="info">
        <RouteShowInfoOverview data={overview} />
        <RouteShowInfoDetail data={detail} />
      </div>
      <RouteShowRank rank={rank} />
    </div>
  );
};

export default RouteShowData;
