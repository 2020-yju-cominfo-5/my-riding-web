import React, { useState } from "react";
import { getTimeContext } from "../../../../../util/getDateContext";
import RecordMap from "../../../RidingRecord/items/Show/RecordMap";
import RecordElevation from "../../../RidingRecord/items/Show/RecordElevation";

const RouteShowInfoDetail = ({ data }) => {
  const {
    myRank,
    usrCount,
    myBestRecord,
    myAvgRecord,
    topRankerAccount,
    topRankerRecord,
    path,
  } = data;

  const isMyRecordExist = Number.isInteger(myRank);
  const [graphData, setGraphData] = useState();
  const [position, setPosition] = useState();

  return (
    <div className="bottom">
      <div className="left">
        <div className="map">
          {path && (
            <RecordMap
              path={path}
              position={position}
              setGraphData={setGraphData}
            />
          )}
        </div>
        <div className="graph">
          {path && (
            <RecordElevation
              graphData={graphData}
              setPosition={setPosition}
              height={60}
            />
          )}
        </div>
      </div>
      <div className="right">
        <div className="my-record">
          <div className="record-title">
            <p className="txt record-sub-title">내 라이딩 기록</p>
            {isMyRecordExist && (
              <p className="my-rank record-sub-title">
                {myRank} / {usrCount}
              </p>
            )}
          </div>
          <div className="record-value">
            {isMyRecordExist ? (
              <>
                <div className="img"></div>
                <div className="record">
                  <div className="wrapper">
                    <p className="title">통산 최고 기록</p>
                    <p className="value">
                      {getTimeContext({ time: myBestRecord })}
                    </p>
                  </div>
                  <div className="wrapper">
                    <p className="title">평균 기록</p>
                    <p className="value">
                      {getTimeContext({ time: myAvgRecord })}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="no-data">{myRank}</div>
            )}
          </div>
        </div>
        {/* ) : (
          <div className="my-record">{myRank}</div>
        )} */}

        <div className="best-record">
          <div className="record-title">
            <p className="record-sub-title">가장 빠른 기록</p>
          </div>
          <div className="record-value">
            {isMyRecordExist ? (
              <>
                <div className="img"></div>
                <div className="record">
                  <div className="user-name">
                    <i className="fas fa-crown"></i>
                    <p className="txt">{topRankerAccount}</p>
                  </div>
                  <div className="wrapper">
                    <p className="title">최고 기록</p>
                    <p className="value">
                      {getTimeContext({ time: topRankerRecord })}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="no-data">{myRank}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteShowInfoDetail;
