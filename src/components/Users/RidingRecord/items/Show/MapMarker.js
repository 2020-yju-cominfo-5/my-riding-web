import React, { useEffect, useState } from "react";
import { Marker } from "@react-google-maps/api";
import { requestAddress } from "../../../../../api/RidingRoute";
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

    requestAddress(lat(), lng()).then((res) => {
      const name = res.data.results[1].formatted_address;

      switch (addressFlag) {
        case "start":
          if (idx === address.end.idx) {
            alert("출발지와 도착지는 같을 수 없습니다.");
            return;
          }
          newAddress = {
            start: {
              flag: true,
              idx,
              name,
            },
            end: address.end,
          };
          break;
        case "end":
          if (idx === address.start.idx) {
            alert("출발지와 도착지는 같을 수 없습니다.");
            return;
          }
          newAddress = {
            start: address.start,
            end: {
              flag: true,
              idx,
              name,
            },
          };
          break;
        default:
          break;
      }
      setAddressFlag();
      setAddress(newAddress);
    });
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

  return <Marker position={position} icon={icon} {...options} />;
};

export default MapMarker;
