import React from "react";
import RouteListTitle from "./RouteListTitle";
import RouteListItem from "./RouteListItem";
import "./RouteList.css";

const RouteList = ({ routes, setSelectedId, setPath }) => {
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
                setPath={setPath}
              />
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default RouteList;
