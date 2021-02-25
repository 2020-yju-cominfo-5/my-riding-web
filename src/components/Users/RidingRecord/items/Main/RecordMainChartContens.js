import React from "react";
import WeekStat from "../../items/WeekStat";

const RecordMainChartContens = ({ year, stats, label }) => {
  return (
    <ul className="chart-contents">
      {stats.map((stat, idx) => {
        return <WeekStat key={idx} stat={stat} year={year} label={label} />;
      })}
    </ul>
  );
};

export default RecordMainChartContens;
