import React, { useState } from "react";
import Modal from "react-modal";
import { updateRidingRecordTitle } from "../../../../../api/RidingRecord";

import "./RecordTitleUpdate.css";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    border: "none",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
  },
};

const RecordTitleUpdate = ({ id, title, controller }) => {
  const { modalIsOpen, setModalIsOpen } = controller;
  const [newTitle, setNewTitle] = useState(title);

  if (!modalIsOpen) {
    return <></>;
  }

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const onChangeHandler = ({ target }) => {
    // TODO 유효성 검사 추가
    // required|string|min:3|max:25|regex:/^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{5,15}$/|unique:records
    setNewTitle(target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (title === newTitle) {
      return;
    }

    if (
      window.confirm(
        `라이딩 일지의 이름이 [${title}]에서 [${newTitle}] 로 변경됩니다.\n저장하시겠습니까?`,
      )
    ) {
      // TODO 라이딩 이름 변경 api 연결
      updateRidingRecordTitle(id, newTitle)
        .then((res) => {
          alert("라이딩 이름 변경에 성공하였습니다.");
          window.location.reload(`record/show/${id}`);
        })
        .catch((err) => {
          alert("라이딩 이름 변경에 실패하였습니다.");
        });
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Related Project"
    >
      <form className="record-title-update" onSubmit={onSubmitHandler}>
        <div className="title">라이딩 일지 이름 변경</div>
        <input
          type="text"
          placeholder="라이딩 일지 이름"
          name="title"
          value={newTitle}
          minLength={3}
          maxLength={25}
          onChange={onChangeHandler}
          required
          autoComplete="off"
        />
        <input type="submit" value="저장" />
      </form>
    </Modal>
  );
};

export default RecordTitleUpdate;
