import React from "react";
import { getTimeContext } from "../../../../util/getDateContext";
import GraphMiniChart from "./GraphMiniChart";
import "./GraphMiniContents.css";

const GraphMiniContents = ({ menu, week, year }) => {
  const weekResult = () => {
    const sum = week.reduce((prev, next) => {
      return { data: prev.data + next.data };
    }).data;
    switch (menu) {
      case "distance":
        return `${sum / 10000}km`;
      case "time":
        return getTimeContext({ time: sum });
      case "avg_speed":
        return `${Math.round((sum / week.length) * 10) / 10}km/h`;
      default:
        break;
    }
    return menu;
  };
  const yearResult = () => {
    const tmpYear = year[menu];
    switch (menu) {
      case "distance":
        return `${tmpYear / 10000}km`;
      case "time":
        return getTimeContext({ time: tmpYear });
      case "avg_speed":
        return `${Math.round(tmpYear * 10) / 10}km/h`;
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
            {week.length === 0 ? (
              <div className="no-data">기록된 라이딩이 없습니다.</div>
            ) : (
              <>
                <div className="result">{weekResult()}</div>
                <GraphMiniChart />
              </>
            )}
          </div>
        </div>
      </div>
      <div className="this-year">
        <div className="title">올해</div>
        {year.distance & year.time & year.avg_speed ? (
          <div className="result">{yearResult()}</div>
        ) : (
          <div className="no-data">기록된 라이딩이 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default GraphMiniContents;
