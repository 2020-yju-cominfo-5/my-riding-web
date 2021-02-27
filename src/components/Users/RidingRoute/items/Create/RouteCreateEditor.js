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
  const [addressFlag, setAddressFlag] = useState();

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

  const onAddressFlagHandler = () => {};

  return (
    <div className="bottom">
      <div className="map">
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}>
          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "100%",
            }}
            options={options.map}
            onLoad={onLoad}
          >
            {position && <MapMarker position={position} icon={pointIcon} />}
            {markers && <MapMarker {...markers.start} />}
            {markers && <MapMarker {...markers.end} />}
            {/* {path.map((ele, idx) => {
              return <MapMarker key={idx} position={ele} />;
            })} */}
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
              <button className="start-reset" onClick={onAddressFlagHandler}>
                재설정
              </button>
            </div>
            <div className="value">{record.startAddress}</div>
          </div>
          <i className="fas fa-arrow-alt-circle-down"></i>
          <div className="end">
            <div className="title">
              <p>도착지</p>
              <button className="start-reset" onClick={onAddressFlagHandler}>
                재설정
              </button>
            </div>
            <div className="value">{record.endAddress}</div>
          </div>
          <div className="text">
            지도에서 원하는 지점을 클릭하여,
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
