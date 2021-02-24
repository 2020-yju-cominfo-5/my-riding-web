import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Title from "../../../../item/Title";

const RecordTitle = ({ data: { id, title } }) => {
  return (
    <div className="header-title">
      <Title title={title} />
      <div>
        {/* TODO 수정 시 이름 바꿀 수 있도록 변경 필요 -> 모달??*/}
        <Link to="/record">수정</Link>
      </div>
      <div>
        <Link to={`/route/create/${id}`}>경로 만들기</Link>
      </div>
    </div>
  );
};

export default RecordTitle;
