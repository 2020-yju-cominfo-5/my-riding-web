import React, { useState, useCallback } from "react";
import { GoogleMap, LoadScript, Polyline } from "@react-google-maps/api";
import MapMarker from "./MapMarker";
import getElevationDataset from "../../../../../util/getElevationDataset";
import point from "../../../../../img/marker/point.png";

const MapRecord = ({ path, position, setGraphData }) => {
  const [icon, setIcon] = useState();

  const options = {
    map: {
      center: path[0],
      disableDefaultUI: true,
      zoom: 15,
    },
    polyline: {
      strokeColor: "#32AF7B",
      strokeWeight: 5,
    },
  };

  const onLoad = useCallback(function callback(map) {
    const elevator = new window.google.maps.ElevationService();

    setIcon({
      url: point,
      scaledSize: new window.google.maps.Size(20, 20),
    });

    const plotElevation = (elevations, status) => {
      if (status !== "OK") {
        // Show the error code inside the chartDiv.
        alert("실패");
        return;
      }

      const dataset = getElevationDataset({ elevations, path });
      const datasets = [
        {
          label: "고도",
          data: dataset.elevations,
          borderColor: "#3773d4",
          backgroundColor: "#3773d4",
          borderWidth: 2,
        },
      ];
      setGraphData({
        labels: dataset.distance,
        locations: dataset.locations,
        datasets,
      });
    };
    elevator.getElevationAlongPath(
      {
        path,
        samples: 500,
      },
      plotElevation,
    );
  }, []);

  return (
    <>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}>
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          options={options.map}
          onLoad={onLoad}
        >
          {position && <MapMarker position={position} icon={icon} />}
          <Polyline path={path} options={options.polyline} />
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default MapRecord;
