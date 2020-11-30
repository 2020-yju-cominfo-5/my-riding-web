import React from "react";
import "./Dashboard.css";
import ProfileMini from "./Dashboard/ProfileMini";
import GraphMini from "./Dashboard/GraphMini";
import Graph from "./Dashboard/Graph";
import NotiBoard from "./Dashboard/NotiBoard";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-left">
        <ProfileMini />
        <GraphMini />
      </div>
      <div className="dashboard-right">
        <p className="dashboard-title">라이딩 요약</p>
        <Graph />
        <p className="dashboard-title">라이딩 알림</p>
        <NotiBoard />
      </div>
    </div>
  );
};

export default Dashboard;
