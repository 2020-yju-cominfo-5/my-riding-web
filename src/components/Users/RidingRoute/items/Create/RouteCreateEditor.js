import React, { useEffect, useState, useCallback } from "react";
import { GoogleMap, LoadScript, Polyline } from "@react-google-maps/api";

import RecordElevation from "../../../RidingRecord/items/Show/RecordElevation";
import MapMarker from "../../../RidingRecord/items/Show/MapMarker";

import getMapOptions from "../../../../../util/getMapOptions";
import getMarkerIcon from "../../../../../util/getMarkerIcon";
import getPlotElevation from "../../../../../util/getPlotElevation";
import setPlotElevation from "../../../../../util/setPlotElevation";

import { requestCreateRidingRoute } from "../../../../../api/RidingRoute";
import "./RouteCreateEditorController.css";
import getDistance from "../../../../../util/getDistance";
import getRoundValue from "../../../../../util/getRoundValue";

const RouteCreateEditor = ({
  id,
  path,
  record,
  newTitle,
  newData,
  setNewData,
}) => {
  const options = getMapOptions(path[0]);
  const [newPath, setNewPath] = useState();
  const [graphData, setGraphData] = useState();
  const [position, setPosition] = useState();
  const [icons, setIcons] = useState();
  const [address, setAddress] = useState({
    start: {
      flag: false,
      idx: 0,
      name: record.startAddress,
    },
    end: {
      flag: false,
      idx: path.length - 1,
      name: record.endAddress,
    },
  });
  const [addressFlag, setAddressFlag] = useState();
  const [mapImgUrl, setMapImgUrl] = useState("");

  const onLoad = useCallback(() => {
    const elevator = new window.google.maps.ElevationService();
    const plotElevation = getPlotElevation({ path, setGraphData });
    setIcons({
      start: getMarkerIcon("start", new window.google.maps.Size(30, 40)),
      end: getMarkerIcon("end", new window.google.maps.Size(30, 40)),
      point: getMarkerIcon("point", new window.google.maps.Size(20, 20)),
    });
    setPlotElevation({ elevator, path, plotElevation });
  }, []);
  const getMapImgFile = async (url, file_name) => {
    const response = await fetch(url);
    const imgData = await response.blob();
    const metadata = {
      type: "image/png",
    };
    const file = new File([imgData], file_name, metadata);
    return file;
  };

  useEffect(() => {
    if (address.start.flag && address.end.flag) {
      const tmpNewPath = path.slice(minIdx, maxIdx + 1);
      setNewPath(tmpNewPath);

      let distance = getDistance(tmpNewPath) / 1000;
      let time = (distance / 15) * 60;

      const elevator = new window.google.maps.ElevationService();
      const plotElevation = getPlotElevation({
        path: tmpNewPath,
        setGraphData,
      });
      setPlotElevation({ elevator, path: tmpNewPath, plotElevation });
      let data = graphData.datasets[0].data;
      let maxAlt = Math.max(...data);
      let minAlt = Math.min(...data);
      console.log(((maxAlt - minAlt) / distance) * 1000 * 100);
      // console.log(graphData);
      // https://maps.googleapis.com/maps/api/elevation/json?key=AIzaSyClA27v6a4Gi1JAbsImTxXRwH-jDb5XDaw&path=36.578581,-118.291994|36.23998,-116.83171&samples=3&sensor=true_or_false
      setNewData({
        distance,
        time,
        grade: Math.random() * 30,
        minAlt,
        maxAlt,
      });

      let pathData = "";
      path.forEach((element) => {
        pathData = pathData.concat(`|${element.lat}, ${element.lng}`);
      });
      // <<-- 마커 포함 이미지 생성 -->>
      // const url = `https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyClA27v6a4Gi1JAbsImTxXRwH-jDb5XDaw&size=700x400&maptype=roadmap&markers=size:tiny|color:red${pathData}&path=color:0x32AF7Bff|weight:5${pathData}`;
      const url = `https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyClA27v6a4Gi1JAbsImTxXRwH-jDb5XDaw&size=700x400&maptype=roadmap&path=color:0x32AF7Bff|weight:5${pathData}`;

      setMapImgUrl(url);
      return;
    }
    return;
  }, [address, graphData]);

  const onAddressFlagHandler = ({ target }) => {
    addressFlag === target.name
      ? setAddressFlag()
      : setAddressFlag(target.name);
  };

  const onSubmitHandler = () => {
    if (!newTitle) {
      alert("생성할 경로의 이름을 입력하세요.");
      return;
    }
    if (!newPath) {
      alert("출발지와 도착지를 설정해 주세요.");
      return;
    }

    getMapImgFile(mapImgUrl, `${newTitle}_mapImg`)
      .then((file) => {
        const formData = new FormData();
        formData.append("route_title", newTitle);
        formData.append("route_image", file);
        formData.append("route_distance", newData.distacne);
        formData.append("route_time", newData.time);
        formData.append("route_avg_degree", newData.grade);
        formData.append("route_max_altitude", newData.minAlt);
        formData.append("route_min_altitude", newData.maxAlt);
        formData.append("route_start_point_address", address.start.name);
        formData.append("route_end_point_address", address.end.name);
        // formData.append("points", JSON.stringify(newPath));
        newPath.map((ele, idx) => {
          formData.append(`points[${idx}]`, JSON.stringify(ele));
        });

        window.confirm("저장 하시겠습니까?") &&
          requestCreateRidingRoute(formData).then(() => {
            window.location.replace("/route");
          });
      })
      .catch((err) => {
        alert("라이딩 경로 생성에 실패하였습니다.");
        return;
      });

    return;
  };
  const onResetHandler = () => {
    window.confirm("초기화 하시겠습니까?") && window.location.reload();
  };
  const onCancelHandler = () => {
    window.confirm("경로 생성을 취소하시겠습니까?") &&
      window.location.replace(`/newData/show/${id}`);
  };

  const minIdx = Math.min(address.start.idx, address.end.idx);
  const maxIdx = Math.max(address.start.idx, address.end.idx);

  return (
    <div className="bottom">
      <div className={`map ${addressFlag && "activate"}`}>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}>
          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "100%",
            }}
            options={options.map}
            onLoad={onLoad}
          >
            {position && <MapMarker position={position} icon={icons.point} />}
            {icons && address.start.flag && (
              <MapMarker
                position={path[address.start.idx]}
                icon={icons.start}
              />
            )}
            {icons && address.end.flag && (
              <MapMarker position={path[address.end.idx]} icon={icons.end} />
            )}
            {addressFlag &&
              path.map((ele, idx) => {
                return (
                  <MapMarker
                    key={idx}
                    position={ele}
                    isEditor={true}
                    idx={idx}
                    addressFlag={addressFlag}
                    setAddressFlag={setAddressFlag}
                    address={address}
                    setAddress={setAddress}
                  />
                );
              })}
            {newPath && <Polyline path={newPath} options={options.polyline} />}
            <Polyline
              path={path}
              options={
                address.start.flag && address.end.flag
                  ? options.prevPolyline
                  : options.polyline
              }
            />
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="chart">
        {graphData && (
          <RecordElevation graphData={graphData} setPosition={setPosition} />
        )}
      </div>
      {mapImgUrl && (
        <div className="map-img">
          <img src={mapImgUrl} alt="지도 이미지"></img>
        </div>
      )}
      <div className="controller">
        <div className="address">
          <div className="start">
            <div className="title">
              <p>출발지</p>
              <button
                name="start"
                className={addressFlag === "start" ? "save-mode" : ""}
                onClick={onAddressFlagHandler}
              >
                {addressFlag === "start" ? "취소" : "변경"}
              </button>
            </div>
            <div className="value">{address.start.name}</div>
          </div>
          <i className="fas fa-arrow-alt-circle-down"></i>
          <div className="end">
            <div className="title">
              <p>도착지</p>
              <button
                name="end"
                className={addressFlag === "end" ? "save-mode" : ""}
                onClick={onAddressFlagHandler}
              >
                {addressFlag === "end" ? "취소" : "변경"}
              </button>
            </div>
            <div className="value">{address.end.name}</div>
          </div>
          <div className="text">
            변경 버튼 클릭 후, 지도에서 원하는
            <br /> 출발지와 도착지를 선택하세요.
          </div>
        </div>
        <div className="btn">
          <button className="save" onClick={onSubmitHandler}>
            저장
          </button>
          <button className="reset" onClick={onResetHandler}>
            초기화
          </button>
          <button className="cancel" onClick={onCancelHandler}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default RouteCreateEditor;
