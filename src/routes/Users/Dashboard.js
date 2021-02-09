import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import ProfileMini from "../../components/Users/Dashboard/ProfileMini";
import GraphMini from "../../components/Users/Dashboard/GraphMini";
import Graph from "../../components/Users/Dashboard/Graph";
import NotiBoard from "../../components/Users/Dashboard/NotiBoard";
import { getDashboardContent } from "../../api/Dashboard";

const Dashboard = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getDashboardContent().then((res) => {
      setData(res.data);
      console.log(res.data);
      // console.log(res.data.stats);
      // console.log(res.data.notifications);
    });
  }, []);

  return (
    <div className="dashboard">
      {data && (
        <>
          <div className="dashboard-left">
            <ProfileMini user={data.user} />
            {/* TODO GraphMini 구현필요 */}
            <GraphMini />
          </div>
          <div className="dashboard-right">
            <p className="dashboard-title">라이딩 요약</p>
            <Graph stats={data.stats} />
            <p className="dashboard-title">라이딩 알림</p>
            <NotiBoard noti={data.notifications} />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
