import React from "react";
import { Marker } from "@react-google-maps/api";
const MapMarker = ({ position, icon }) => {
  return <Marker position={position} icon={icon} />;
};

export default MapMarker;
