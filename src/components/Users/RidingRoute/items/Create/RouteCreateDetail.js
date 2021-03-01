import React from "react";
import RouteShowInfoOverview from "../Show/RouteShowInfoOverview";

const RouteCreateDeatil = ({ newTitle, setNewTitle, newData }) => {
  const onChangeHandler = ({ target }) => {
    setNewTitle(target.value);
  };
  // TODO 유효성 검사 추가
  // required|string|min:3|max:25|regex:/^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{5,15}$/|unique:records

  return (
    <div className="top">
      <input
        type="text"
        placeholder="경로 이름을 입력하게요."
        value={newTitle}
        onChange={onChangeHandler}
      />
      <RouteShowInfoOverview data={newData} />
    </div>
  );
};

export default RouteCreateDeatil;
