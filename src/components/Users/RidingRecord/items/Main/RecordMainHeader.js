import React from "react";
import Dropdown from "react-dropdown";

const RecordMainHeader = ({ data }) => {
  const { years, year, yearChangeHandler } = data;
  return (
    <div className="header">
      <div className="dropdown-section">
        <Dropdown
          options={years}
          onChange={yearChangeHandler}
          value={year}
          placeholder="조회년도"
        />
      </div>
      <div className="dropdown-txt">년</div>
      <div className="legend-section">
        <div>거리</div>
        <div>시간</div>
        <div>평균속도</div>
      </div>
    </div>
  );
};

export default RecordMainHeader;
