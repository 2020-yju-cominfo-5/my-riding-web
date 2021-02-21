import React, { useState } from "react";
import GraphMiniMenus from "./GraphMini/GraphMiniMenus";
import GraphMiniContents from "./GraphMini/GraphMiniContents";
import "./GraphMini.css";

// TODO temp data 변경 (this week, year 합)
const GraphMini = () => {
  const stats = {
    week: "1",
    startDate: "2021-01-03",
    endDate: "2021-01-09",
    values: [
      {
        day: 0,
        distance: 30000,
        time: 50,
        avg_speed: 20,
      },
      {
        day: 1,
        distance: 10000,
        time: 60,
        avg_speed: 30,
      },
      {
        day: 2,
        distance: 5000,
        time: 20,
        avg_speed: 30,
      },
      {
        day: 3,
        distance: 20000,
        time: 25,
        avg_speed: 10,
      },
      {
        day: 4,
        distance: 40000,
        time: 15,
        avg_speed: 25,
      },
      {
        day: 5,
        distance: 35000,
        time: 20,
        avg_speed: 30,
      },
      {
        day: 6,
        distance: 40000,
        time: 35,
        avg_speed: 15,
      },
    ],
  };

  const [selectedMenu, setSelectedMenu] = useState("distance");
  const week = stats.values.map((stat) => {
    return { day: stat.day, data: stat[selectedMenu] };
  });
  const year = {
    distance: 1000,
    time: 20000,
    avg_speed: 300.56,
  };

  return (
    <div className="graph-mini">
      <GraphMiniMenus controller={{ selectedMenu, setSelectedMenu }} />
      <GraphMiniContents menu={selectedMenu} week={week} year={year} />
    </div>
  );
};

export default GraphMini;
