import React, { useState, useCallback } from "react";
import { GoogleMap, LoadScript, Polyline } from "@react-google-maps/api";
import RecordElevation from "../../../RidingRecord/items/Show/RecordElevation";

import getMapOptions from "../../../../../util/getMapOptions";
import MapMarker from "../../../RidingRecord/items/Show/MapMarker";
import getMarkerIcon from "../../../../../util/getMarkerIcon";
import getPlotElevation from "../../../../../util/getPlotElevation";
import setPlotElevation from "../../../../../util/setPlotElevation";

import "./RouteCreateEditorController.css";

const RouteCreateEditor = ({ path, newPath, record }) => {
  const options = getMapOptions(path[0]);
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

  const onLoad = useCallback(() => {
    const elevator = new window.google.maps.ElevationService();
    const plotElevation = getPlotElevation({ path, setGraphData });
    setIcons({
      start: getMarkerIcon("start", new window.google.maps.Size(30, 40)),
      end: getMarkerIcon("end", new window.google.maps.Size(30, 40)),
      point: getMarkerIcon("point", new window.google.maps.Size(20, 20)),
    });
    setPlotElevation({ elevator, path, plotElevation });
  }, [address]);

  const onAddressFlagHandler = ({ target }) => {
    addressFlag === target.name
      ? setAddressFlag()
      : setAddressFlag(target.name);
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
            <Polyline
              path={path.slice(minIdx, maxIdx + 1)}
              options={options.polyline}
            />
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
          <button className="save">저장</button>
          <button className="reset">초기화</button>
          <button className="exit">취소</button>
        </div>
      </div>
    </div>
  );
};

export default RouteCreateEditor;
