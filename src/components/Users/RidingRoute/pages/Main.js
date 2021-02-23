import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Title from "../../../item/Title";
import RouteList from "../items/Main/RouteList";
import RouteInfo from "../items/Main/RouteInfo";
import { getRidingRouteList } from "../../../../api/RidingRoute";

const Main = () => {
  const [routes, setRoutes] = useState([]);
  const [route, setRoute] = useState({
    id: 0,
    name: "",
    startAddress: "",
    endAddress: "",
    distance: 0,
    time: 0,
  });
  const [selectedId, setSelectedId] = useState(0);
  const history = useHistory();

  useEffect(() => {
    if (selectedId === 0) {
      getRidingRouteList().then((res) => {
        const newRoutes = res.data.routes;
        if (newRoutes.length === 0) {
          alert(
            "저장된 경로가 없습니다.\n(경로 만들기, 좋아요 등을 통해 추가 가능)",
          );
          history.push("/");
          return;
        }
        setRoutes(newRoutes, ...routes);
        setRoute(newRoutes[0]);
        setSelectedId(newRoutes[0].id);
      });
    } else {
      setRoute(
        routes.find((ele) => {
          return ele.id === parseInt(selectedId);
        }),
      );
    }
  }, [selectedId]);

  return (
    <>
      <Title title="라이딩 경로" />
      <div className="route-main-wrapper">
        <RouteList routes={routes} setSelectedId={setSelectedId} />
        <RouteInfo route={route} />
      </div>
    </>
  );
};

export default Main;
