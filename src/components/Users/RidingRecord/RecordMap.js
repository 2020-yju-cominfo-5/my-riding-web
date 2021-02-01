import React, { useCallback } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";

const MapRecord = ({ setGraphData }) => {
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

  const onLoad = useCallback(function callback(map) {
    const elevator = new window.google.maps.ElevationService();

    const getDistance = () => {
      let distance = 0;

      if (path.length < 2) {
        return distance;
      }

      path.forEach((_, idx) => {
        if (path.length - 1 == idx) {
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
