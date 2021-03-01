import React from "react";
import { getTimeContext } from "../../../../util/getDateContext";
import GraphMiniChart from "./GraphMiniChart";
import getRoundValue from "../../../../util/getRoundValue";
import "./GraphMiniContents.css";

const GraphMiniContents = ({ menu, weekData, yearData }) => {
  const weekResult = () => {
    const sum = weekData.reduce((prev, next) => {
      return { value: prev.value + next.value };
    }).value;
    switch (menu) {
      case "distance":
        return `${getRoundValue(sum)}km`;
      case "time":
        return getTimeContext({ time: sum });
      case "avg_speed":
        return `${getRoundValue(sum / weekData.length)}km/h`;
      default:
        break;
    }
    return menu;
  };
  const yearResult = () => {
    const tmpYearData = yearData[menu];
    switch (menu) {
      case "distance":
        return `${getRoundValue(tmpYearData)}km`;
      case "time":
        return getTimeContext({ time: tmpYearData });
      case "avg_speed":
        return `${getRoundValue(tmpYearData)}km/h`;
      default:
        break;
    }
  };

  return (
    <div className="contents">
      <div className="this-week">
        <div className="wrapper">
          <div className="title">이번 주</div>
          <div className="value">
            {weekData.length === 0 ? (
              <div className="no-data">기록된 라이딩이 없습니다.</div>
            ) : (
              <>
                <div className="result">{weekResult()}</div>
                <GraphMiniChart data={weekData} />
              </>
            )}
          </div>
        </div>
      </div>
      <div className="this-year">
        <div className="title">올해</div>
        {yearData.distance && yearData.time && yearData.avg_speed ? (
          <div className="result">{yearResult()}</div>
        ) : (
          <div className="no-data">기록된 라이딩이 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default GraphMiniContents;
