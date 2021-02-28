import React, { useState } from "react";
import GraphMiniMenus from "./GraphMini/GraphMiniMenus";
import GraphMiniContents from "./GraphMini/GraphMiniContents";
import "./GraphMini.css";

// TODO temp data 변경 (this week, year 합)
const GraphMini = ({ stat, year }) => {
  const [selectedMenu, setSelectedMenu] = useState("distance");
  const weekData = stat.values.map((ele) => {
    return { day: ele.day, value: ele[selectedMenu] };
  });
  const yearData = {
    distance: 1000,
    time: 20000,
    avg_speed: 300.56,
  };

  return (
    <div className="graph-mini">
      <GraphMiniMenus controller={{ selectedMenu, setSelectedMenu }} />
      <GraphMiniContents
        menu={selectedMenu}
        weekData={weekData}
        yearData={yearData}
        // yearData={year}
      />
    </div>
  );
};

export default GraphMini;
