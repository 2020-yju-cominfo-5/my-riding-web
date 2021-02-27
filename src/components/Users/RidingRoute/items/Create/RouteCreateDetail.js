import React from "react";
import RouteShowInfoOverview from "../Show/RouteShowInfoOverview";

const RouteCreateDeatil = ({ title, onChangeHandler }) => {
  return (
    <div className="top">
      <input
        type="text"
        placeholder="경로 이름을 입력하게요."
        value={title}
        onChange={onChangeHandler}
      />
      <RouteShowInfoOverview
        data={{ distacne: 0, time: 0, grade: 0, minAlt: 0, maxAlt: 0 }}
      />
    </div>
  );
};

export default RouteCreateDeatil;
