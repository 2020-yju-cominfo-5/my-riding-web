import React from "react";
import WeekStat from "../../items/WeekStat";

const RecordMainChartContens = ({ year, stats }) => {
  return (
    <ul className="chart-contents">
      {/* FIXME stats object -> array 로 변경 필요, 변경 시 바로 map 적용 */}
      {Object.values(stats)
        .reverse()
        .map((stat, idx) => {
          return <WeekStat key={idx} stat={stat} year={year} />;
        })}
      {/* {stats.map((stat, idx) => {
        return <WeekStat key={idx} stat={stat} year={year} />;
      })} */}
    </ul>
  );
};

export default RecordMainChartContens;
