import React from "react";
import RouteListTitle from "../items/RouteListTitle";
import "./RouteList.css";
import RouteListItem from "./RouteListItem";

const RouteList = ({ routes, setSelectedId }) => {
  return (
    <div className="route-list">
      <ul>
        <RouteListTitle />
        <div className="value-wrapper">
          {routes.map((ele, idx) => {
            return (
              <RouteListItem
                key={ele.id}
                data={ele}
                setSelectedId={setSelectedId}
              />
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default RouteList;
