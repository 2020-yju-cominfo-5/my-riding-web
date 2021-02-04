import React, { useState, useEffect } from "react";
import RecordDetail from "../items/RecordDetail";
import RecordTitle from "../items/RecordTitle";
import RecordElevation from "../items/RecordElevation";

import "./Show.css";
import { getRidingRecordById } from "../../../../api/RidingRecord";

const Show = ({ match }) => {
  const { id } = match.params;
  const [title, setTitle] = useState();
  const [detail, setDetail] = useState();

  const [graphData, setGraphData] = useState();
  useEffect(() => {
    getRidingRecordById(id).then((res) => {
      const { record, path } = res.data;
      setTitle({ id, title: record.title });
      setDetail({ info: record, path });
    });
  });

  console.log("a");

  // TODO 지도~그래프 이벤트 연결
  return (
    <>
      <div className="record-show">
        {title && <RecordTitle data={title} />}
        {detail && <RecordDetail data={detail} setGraphData={setGraphData} />}
        {graphData && (
          <div className="chart">
            {Object.keys(graphData).length !== 0 && (
              <RecordElevation graphData={graphData} />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Show;
