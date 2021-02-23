import React, { useState } from "react";
import GraphMiniMenus from "./GraphMini/GraphMiniMenus";
import GraphMiniContents from "./GraphMini/GraphMiniContents";
import "./GraphMini.css";

// TODO temp data 변경 (this week, year 합)
const GraphMini = ({ stats }) => {
  const [selectedMenu, setSelectedMenu] = useState("distance");
  const weekData = stats.values.map((stat) => {
    return { day: stat.day, value: stat[selectedMenu] };
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
      />
    </div>
  );
};

export default GraphMini;
