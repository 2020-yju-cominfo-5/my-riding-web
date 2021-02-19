import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import Title from "../../../item/Title";
import RouteList from "../items/RouteList";
import RouteInfo from "../items/RouteInfo";
import { getRidingRouteList } from "../../../../api/RidingRoute";

const Main = ({ match: { params } }) => {
  const [routes, setRoutes] = useState([]);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
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
      params.id || history.push(`/route/${newRoutes[0].id}`);
    });
  }, [location]);

  const id = params.id
    ? parseInt(params.id)
    : routes.length !== 0 && routes[0].id;

  return (
    <>
      <Title title="라이딩 경로" />
      <div className="route-main-wrapper">
        <RouteList routes={routes} />
        <RouteInfo
          route={routes.find((ele) => {
            return ele.id === id;
          })}
        />
      </div>
    </>
  );
};

export default Main;
