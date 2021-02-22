import React from "react";
import WeekStat from "../../items/WeekStat";

const RecordMainChartContens = ({ year, stats }) => {
  return (
    <ul className="chart-contents">
      {stats.map((stat, idx) => {
        return <WeekStat key={idx} stat={stat} year={year} />;
      })}
    </ul>
  );
};

export default RecordMainChartContens;
