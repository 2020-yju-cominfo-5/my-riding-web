import React from "react";
import "./Dashboard.css";
import ProfileMini from "../../components/Users/Dashboard/ProfileMini";
import GraphMini from "../../components/Users/Dashboard/GraphMini";
import Graph from "../../components/Users/Dashboard/Graph";
import NotiBoard from "../../components/Users/Dashboard/NotiBoard";

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
