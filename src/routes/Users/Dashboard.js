import React, { useState, useEffect } from "react";
import ProfileMini from "../../components/Users/Dashboard/ProfileMini";
import GraphMini from "../../components/Users/Dashboard/GraphMini";
import Graph from "../../components/Users/Dashboard/Graph";
import NotiBoard from "../../components/Users/Dashboard/NotiBoard";
import { getDashboard } from "../../api/Dashboard";
import "./Dashboard.css";

const Dashboard = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getDashboard().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="dashboard">
      {data && (
        <>
          <div className="dashboard-left">
            <ProfileMini user={data.user} />
            <GraphMini stat={data.stat} year={data.year} />
          </div>
          <div className="dashboard-right">
            <p className="dashboard-title">라이딩 통계 요약</p>
            <Graph stat={data.stat} />
            <p className="dashboard-title">라이딩 알림</p>
            <NotiBoard noti={data.notifications} />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
