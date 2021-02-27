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
  const [markers, setMarkers] = useState();
  const [pointIcon, setPointIcon] = useState();
  const [address, setAddress] = useState({
    start: {
      idxPoint: 0,
      name: record.startAddress,
    },
    end: {
      idxPoint: path.length - 1,
      name: record.endAddress,
    },
  });
  const [addressFlag, setAddressFlag] = useState();
  console.log(address.start, address.end);

  const onLoad = useCallback(() => {
    const elevator = new window.google.maps.ElevationService();
    const plotElevation = getPlotElevation({ path, setGraphData });
    const mapMarkers = {
      start: {
        position: newPath[0],
        icon: getMarkerIcon("start", new window.google.maps.Size(30, 40)),
      },
      end: {
        position: newPath[newPath.length - 1],
        icon: getMarkerIcon("end", new window.google.maps.Size(30, 40)),
      },
    };
    const icon = getMarkerIcon("point", new window.google.maps.Size(20, 20));
    setMarkers(mapMarkers);
    setPointIcon(icon);
    setPlotElevation({ elevator, path, plotElevation });
  }, []);

  const onAddressFlagHandler = ({ target }) => {
    addressFlag === target.name
      ? setAddressFlag()
      : setAddressFlag(target.name);
    // addressFlag ? setAddressFlag() : setAddressFlag(target.name);
  };

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
            // onZoomChanged={(event) => {
            //   console.log(event, "a");
            // }}
          >
            {position && <MapMarker position={position} icon={pointIcon} />}
            {/* {markers && <MapMarker {...markers.start} />} */}
            {/* {markers && <MapMarker {...markers.end} />} */}
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
            <Polyline path={newPath} options={options.polyline} />
            <Polyline path={path} options={options.prevPolyline} />
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
