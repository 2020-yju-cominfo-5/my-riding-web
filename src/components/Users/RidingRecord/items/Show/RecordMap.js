import React, { useCallback } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";

const MapRecord = ({ path, setGraphData }) => {
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

  const onLoad = useCallback(function callback(map) {
    const elevator = new window.google.maps.ElevationService();

    const getDistance = () => {
      let distance = 0;

      if (path.length < 2) {
        return distance;
      }

      path.forEach((_, idx) => {
        if (path.length - 1 === idx) {
          return;
        }

        const point_1 = path[idx];
        const point_2 = path[parseInt(idx) + 1];

        const result = window.google.maps.geometry.spherical.computeDistanceBetween(
          new window.google.maps.LatLng(point_1.lat, point_1.lng),
          new window.google.maps.LatLng(point_2.lat, point_2.lng),
        );

        distance += Math.round(result);
      });
      return distance;
    };

    const plotElevation = (elevations, status) => {
      if (status !== "OK") {
        // Show the error code inside the chartDiv.
        alert("실패");
        return;
      }

      const dataSet = {
        elevations: [],
        distance: [],
        locations: [],
      };

      elevations.map((element) => {
        dataSet.elevations.push(element.elevation);
        dataSet.locations.push(element.location.toJSON());
        const tmpDistance = Math.round(
          (getDistance() / 500) * dataSet.elevations.length,
        );
        const distanceTxt =
          tmpDistance < 1000 ? tmpDistance + "m" : tmpDistance / 1000 + "km";
        dataSet.distance.push(distanceTxt);
      });

      var data = {
        labels: dataSet.distance,
        datasets: [
          {
            label: "고도",
            data: dataSet.elevations,
            // borderColor: "#32AF7B",
            // backgroundColor: "#32AF7B",
            borderColor: "#3773d4",
            backgroundColor: "#3773d4",
            borderWidth: 2,
          },
        ],
      };
      setGraphData(data);
    };

    elevator.getElevationAlongPath(
      {
        path,
        samples: 500,
      },
      plotElevation,
    );
  }, []);

  const containerStyle = {
    width: "100%",
    height: "100%",
  };
  return (
    <>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          options={options.map}
          onLoad={onLoad}
        >
          {/* {path.map((item, idx) => {
          return <Marker key={idx} position={item}></Marker>;
        })} */}
          <Polyline path={path} options={options.polyline} />
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default MapRecord;
