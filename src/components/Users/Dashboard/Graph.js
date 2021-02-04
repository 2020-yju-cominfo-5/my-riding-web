import React from "react";

const Graph = ({ stats }) => {
  console.log(stats);
  return (
    <div className="graph">
      {stats.values.length === 0 ? "해당 주에 라이딩 기록이 없습니다." : ""}
    </div>
  );
};

export default Graph;
