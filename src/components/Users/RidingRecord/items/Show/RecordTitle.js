import React, { useState } from "react";
import { Link } from "react-router-dom";

import RecordTitleUpdate from "./RecordTitleUpdate";
import Title from "../../../../item/Title";

const RecordTitle = ({ data: { id, title } }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const onClickHandler = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      {modalIsOpen && (
        <RecordTitleUpdate
          id={id}
          title={title}
          controller={{ modalIsOpen, setModalIsOpen }}
        />
      )}
      <div className="header-title">
        <Title title={title} />
        <div>
          {/* TODO 수정 시 이름 바꿀 수 있도록 변경 필요 -> 모달??*/}
          <button className="edit-btn" onClick={onClickHandler}>
            이름 변경
          </button>
        </div>
        <div>
          <Link to={`/route/create/${id}`}>경로 만들기</Link>
        </div>
      </div>
    </>
  );
};

export default RecordTitle;
