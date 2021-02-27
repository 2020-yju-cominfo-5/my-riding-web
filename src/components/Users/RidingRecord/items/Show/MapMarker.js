import React from "react";
import { Marker } from "@react-google-maps/api";
const MapMarker = ({ position, icon, options }) => {
  return <Marker position={position} icon={icon} {...options} />;
};

export default MapMarker;
