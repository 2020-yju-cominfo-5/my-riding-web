import React, { useEffect, useState } from "react";
import { Marker } from "@react-google-maps/api";
const MapMarker = ({
  position,
  icon,
  isEditor,
  idx,
  addressFlag,
  setAddressFlag,
  address,
  setAddress,
}) => {
  const DEFAULT_OPACITY = 0.2;
  const [opacity, setOpacity] = useState(DEFAULT_OPACITY);
  const [options, setOptions] = useState();
  const onClickHandler = ({ latLng: { lat, lng } }) => {
    let newAddress;

    switch (addressFlag) {
      case "start":
        if (idx === address.end.idxPoint) {
          alert("출발지와 도착지는 같을 수 없습니다.");
          return;
        }
        newAddress = {
          start: {
            idxPoint: idx,
            name: lat() + lng(),
          },
          end: address.end,
        };
        break;
      case "end":
        if (idx === address.start.idxPoint) {
          alert("출발지와 도착지는 같을 수 없습니다.");
          return;
        }
        newAddress = {
          start: address.start,
          end: {
            idxPoint: idx,
            name: lat() + lng(),
          },
        };
        break;
      default:
        break;
    }
    console.log(newAddress);
    setAddressFlag();
    setAddress(newAddress);
  };

  useEffect(() => {
    if (!isEditor) {
      return;
    }

    setOptions({
      opacity: opacity,
      clickable: true,
      onMouseOver: () => {
        setOpacity(1);
      },
      onMouseOut: () => {
        setOpacity(DEFAULT_OPACITY);
      },
      onClick: onClickHandler,
    });
  }, [isEditor, opacity]);
  // isEditor &&
  //   setOptions({
  //     opacity: DEFAULT_OPACITY,
  //     onMouseOver: () => {},
  //     onMouseOut: () => {},
  //   });
  // return <Marker position={position} icon={icon} {...options} />;
  return <Marker position={position} icon={icon} {...options} />;
};

export default MapMarker;
