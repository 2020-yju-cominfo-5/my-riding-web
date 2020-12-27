import React, { useState, useCallback } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";

const MapRecord = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
  };
  const path = [
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
  const options = {
    map: {
      center: { lat: 35.89527, lng: 128.62256 },
      disableDefaultUI: true,
      zoom: 15,
    },
    polyline: {
      strokeColor: "#32AF7B",
      strokeWeight: 5,
    },
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} options={options.map}>
        {/* {path.map((item, idx) => {
          return <Marker key={idx} position={item}></Marker>;
        })} */}
        <Polyline path={path} options={options.polyline} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapRecord;
