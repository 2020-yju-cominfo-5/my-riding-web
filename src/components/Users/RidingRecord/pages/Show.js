import React, { useState, useEffect } from "react";
import RecordDetail from "../items/Show/RecordDetail";
import RecordTitle from "../items/Show/RecordTitle";
import RecordElevation from "../items/Show/RecordElevation";
import { getRidingRecordById } from "../../../../api/RidingRecord";

import "./Show.css";

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
  }, []);

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
