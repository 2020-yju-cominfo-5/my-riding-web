import React from "react";
import Dropdown from "react-dropdown";

const RecordMainHeader = ({ data, setLabel }) => {
  const { years, year, yearChangeHandler } = data;

  const onMouseOverHandler = ({ target }) => {
    setLabel(target.className);
  };
  const onMouseOutHandler = () => {
    setLabel();
  };

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
        <div
          className="distance"
          onMouseOver={onMouseOverHandler}
          onMouseOut={onMouseOutHandler}
        >
          거리
        </div>
        <div
          className="time"
          onMouseOver={onMouseOverHandler}
          onMouseOut={onMouseOutHandler}
        >
          시간
        </div>
        <div
          className="avgSpeed"
          onMouseOver={onMouseOverHandler}
          onMouseOut={onMouseOutHandler}
        >
          평균속도
        </div>
      </div>
    </div>
  );
};

export default RecordMainHeader;
