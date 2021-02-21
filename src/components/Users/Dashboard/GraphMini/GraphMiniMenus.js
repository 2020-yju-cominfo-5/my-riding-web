import React from "react";
import distance from "../../../../img/graph/graph-distance.png";
import time from "../../../../img/graph/graph-time.png";
import speed from "../../../../img/graph/graph-speed.png";

import distanceHover from "../../../../img/graph/graph-distance-over.png";
import timeHover from "../../../../img/graph/graph-time-over.png";
import speedHover from "../../../../img/graph/graph-speed-over.png";

const GraphMiniMenus = ({ controller }) => {
  const { selectedMenu, setSelectedMenu } = controller;
  const menus = [
    { name: "distance", icon: distance, hover: distanceHover },
    { name: "time", icon: time, hover: timeHover },
    { name: "avg_speed", icon: speed, hover: speedHover },
  ];

  const onClickHandler = ({ target }) => {
    setSelectedMenu(target.alt);
  };
  const onHoverHandler = (event) => {
    const { type, target } = event;
    const { icon, hover } = menus.find((ele) => {
      return ele.name === target.alt;
    });
    switch (type) {
      case "mouseover":
        target.src = hover;
        break;
      case "mouseout":
        target.src = icon;
        break;
      default:
        break;
    }
  };

  return (
    <div className="menus">
      {menus.map((menu, idx) => {
        const { name, icon } = menu;
        return (
          <div
            key={idx}
            className={`menu ${selectedMenu === name ? "selected" : ""}`}
          >
            <img
              className={`img img-${name}`}
              src={icon}
              alt={name}
              onClick={onClickHandler}
              onMouseOver={onHoverHandler}
              onMouseOut={onHoverHandler}
            />
          </div>
        );
      })}
    </div>
  );
};

export default GraphMiniMenus;
