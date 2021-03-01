import React, { useState, useCallback } from "react";
import { GoogleMap, LoadScript, Polyline } from "@react-google-maps/api";
import MapMarker from "./MapMarker";
import getMapOptions from "../../../../../util/getMapOptions";
import getMarkerIcon from "../../../../../util/getMarkerIcon";
import getPlotElevation from "../../../../../util/getPlotElevation";
import setPlotElevation from "../../../../../util/setPlotElevation";

const MapRecord = ({ path, position, setGraphData }) => {
  const [pointIcon, setPointIcon] = useState();
  const options = getMapOptions(path[0]);

  const onLoad = useCallback(function callback(map) {
    const elevator = new window.google.maps.ElevationService();
    const icon = getMarkerIcon("point", new window.google.maps.Size(20, 20));
    const plotElevation = getPlotElevation({ path, setGraphData });

    setPlotElevation({ elevator, path, plotElevation });
    setPointIcon(icon);
  }, []);

  console.log(position);
  return (
    <>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}>
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          options={options.map}
          onLoad={setGraphData && onLoad}
        >
          {position && <MapMarker position={position} icon={pointIcon} />}
          <Polyline path={path} options={options.polyline} />
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default MapRecord;
