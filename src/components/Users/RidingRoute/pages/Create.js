import React, { useState, useEffect } from "react";
import { getRidingRecordById } from "../../../../api/RidingRecord";
import RouterShowInfoOverview from "../items/Show/RouterShowInfoOverview";
import "./Create.css";

const Create = ({ match }) => {
  const {
    params: { id },
  } = match;
  const [data, setData] = useState();

  const tmpPath = [
    { lat: 35.896725779882495, lng: 128.61992229254435 },
    { lat: 35.89615433382256, lng: 128.62008322508524 },
    { lat: 35.895709559903636, lng: 128.61832246923242 },
    { lat: 35.89532497004942, lng: 128.61789063358103 },
    { lat: 35.89431373383062, lng: 128.6191723658755 },
    { lat: 35.89343664823684, lng: 128.6202365874973 },
    { lat: 35.8929945284723, lng: 128.620886215532 },
    { lat: 35.89269901443541, lng: 128.62153799232263 },
    { lat: 35.89509840545565, lng: 128.6236606776624 },
    { lat: 35.895130997981916, lng: 128.62377333044103 },
    { lat: 35.89496803521641, lng: 128.62437682746938 },
    { lat: 35.89532438002844, lng: 128.62444924711278 },
    { lat: 35.89715113219949, lng: 128.6243494404496 },
    { lat: 35.897377100912635, lng: 128.62426897417916 },
    { lat: 35.898843880165494, lng: 128.62286328546776 },
    { lat: 35.89912484675867, lng: 128.6224709873701 },
    { lat: 35.89849574981631, lng: 128.6194481378103 },
  ];

  useEffect(() => {
    getRidingRecordById(id)
      .then((res) => {
        if (!res.data.records.length) {
          alert("존재하지 않는 라이딩 일지입니다.");
          window.history.back();
          return;
        }

        setData({ id, ...res.data });
      })
      .catch((err) => {
        alert("라이딩 일지 정보 조회에 실패하였습니다.");
      });
  }, []);

  if (!data) {
    return <>로딩중</>;
  }

  return (
    <div className="route-create">
      <div className="top">
        <input type="text" placeholder="경로 이름을 입력하게요." />
        <RouterShowInfoOverview
          data={{ distacne: 0, time: 0, grade: 0, minAlt: 0, maxAlt: 0 }}
        />
      </div>
      <div className="bottom">
        <div className="map">지도</div>
        <div className="graph">고도 그래프</div>
        <div className="controller">컨트롤러</div>
      </div>
    </div>
  );
};

export default Create;
