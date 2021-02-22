import React from "react";
import RouterShowInfoOverview from "./RouterShowInfoOverview";
import RouterShowInfoDetail from "./RouterShowInfoDetail";
import RouterShowRank from "./RouterShowRank";

const RouterShowData = ({ data }) => {
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
        <RouterShowInfoOverview data={overview} />
        <RouterShowInfoDetail data={detail} />
      </div>
      <RouterShowRank rank={rank} />
    </div>
  );
};

export default RouterShowData;
