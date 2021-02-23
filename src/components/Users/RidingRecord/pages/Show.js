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
      const { records, path } = res.data;
      setTitle({ id, title: records[0].title });
      // setDetail({ info: records[0], path });
      // FIXME path 정보 수정필요
      // TODO 지도 ~ 고도 그래프 이벤트 연결
      setDetail({
        info: records[0],
        path: [
          { lat: 35.896725779882495, lng: 128.61992229254435 },
          { lat: 35.89615433382256, lng: 128.62008322508524 },
          { lat: 35.895709559903636, lng: 128.61832246923242 },
          { lat: 35.89532497004942, lng: 128.61789063358103 },
          { lat: 35.89431373383062, lng: 128.6191723658755 },
          { lat: 35.89343664823684, lng: 128.6202365874973 },
          { lat: 35.8929945284723, lng: 128.620886215532 },
          { lat: 35.89269901443541, lng: 128.62153799232263 },
          { lat: 35.89509840545565, lng: 128.6236606776624 },
          { lat: 35.895130997981916, lng: 128.62377333044103 },
          { lat: 35.89496803521641, lng: 128.62437682746938 },
          { lat: 35.89532438002844, lng: 128.62444924711278 },
          { lat: 35.89715113219949, lng: 128.6243494404496 },
          { lat: 35.897377100912635, lng: 128.62426897417916 },
          { lat: 35.898843880165494, lng: 128.62286328546776 },
          { lat: 35.89912484675867, lng: 128.6224709873701 },
          { lat: 35.89849574981631, lng: 128.6194481378103 },
        ],
      });
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
