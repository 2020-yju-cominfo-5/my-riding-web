import React, { useState, useEffect } from "react";
import { getRidingRecordById } from "../../../../api/RidingRecord";
import RouteCreateDeatil from "../items/Create/RouteCreateDetail";
import RouteCreateEditor from "../items/Create/RouteCreateEditor";
import "./Create.css";

const Create = ({ match }) => {
  const {
    params: { id },
  } = match;
  const [data, setData] = useState();
  const [newData, setNewData] = useState({
    distacne: 0,
    time: 0,
    grade: 0,
    minAlt: 0,
    maxAlt: 0,
  });
  const [newTitle, setNewTitle] = useState("");

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
        window.history.back();
      });
  }, []);

  if (!data) {
    return <>로딩중</>;
  }

  //   route_title:학교라이딩0001
  // route_image;
  // route_distance:6
  // route_time:33
  // route_avg_degree:22
  // route_max_altitude:26
  // route_min_altitude:24
  // route_start_point_address:대구광역시 북구 복현로22길
  // route_end_point_address:대구광역시 북구 산격동33길
  // points[0][lat]:35.185689
  // points[0][lng]:129.07168
  // points[1][lat]:35.185749
  // points[1][lng]:129.071722
  return (
    <div className="route-create">
      <RouteCreateDeatil
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newData={newData}
      />
      <RouteCreateEditor
        id={id}
        path={tmpPath}
        record={data.records[0]}
        newTitle={newTitle}
        newData={newData}
        setNewData={setNewData}
      />
    </div>
  );
};

export default Create;
