import React, { useState, useEffect } from "react";
import "./Dashboard.css";
<<<<<<< Updated upstream:src/components/Users/Dashboard.js
import ProfileMini from "./Dashboard/ProfileMini";
import GraphMini from "./Dashboard/GraphMini";
import Graph from "./Dashboard/Graph";
import NotiBoard from "./Dashboard/NotiBoard";
=======
import ProfileMini from "../../components/Users/Dashboard/ProfileMini";
import GraphMini from "../../components/Users/Dashboard/GraphMini";
import Graph from "../../components/Users/Dashboard/Graph";
import NotiBoard from "../../components/Users/Dashboard/NotiBoard";
import { getDashboardContent } from "../../api/Dashboard";
>>>>>>> Stashed changes:src/routes/Users/Dashboard.js

const Dashboard = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getDashboardContent().then((res) => {
      setData(res.data);
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
