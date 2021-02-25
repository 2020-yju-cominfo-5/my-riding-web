import React from "react";
import RecordInfo from "./RecordInfo";
import RecordMap from "./RecordMap";

const RecordDetail = ({ data, position, setGraphData }) => {
  const { info, path } = data;

  return (
    <div className="detail">
      <RecordInfo info={info} />
      <div className="map">
        <RecordMap
          path={path}
          position={position}
          setGraphData={setGraphData}
        />
      </div>
    </div>
  );
};

export default RecordDetail;
