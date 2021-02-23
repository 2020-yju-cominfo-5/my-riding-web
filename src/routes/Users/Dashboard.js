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

  // const stats = {
  //   week: "1",
  //   startDate: "2021-01-03",
  //   endDate: "2021-01-09",
  //   values: [
  //     {
  //       day: 0,
  //       distance: 30000,
  //       time: 50,
  //       avg_speed: 20,
  //     },
  //     {
  //       day: 1,
  //       distance: 10000,
  //       time: 60,
  //       avg_speed: 30,
  //     },
  //     {
  //       day: 2,
  //       distance: 5000,
  //       time: 20,
  //       avg_speed: 30,
  //     },
  //     {
  //       day: 3,
  //       distance: 20000,
  //       time: 25,
  //       avg_speed: 10,
  //     },
  //     {
  //       day: 4,
  //       distance: 40000,
  //       time: 15,
  //       avg_speed: 25,
  //     },
  //     {
  //       day: 5,
  //       distance: 35000,
  //       time: 20,
  //       avg_speed: 30,
  //     },
  //     {
  //       day: 6,
  //       distance: 40000,
  //       time: 35,
  //       avg_speed: 15,
  //     },
  //   ],
  // };

  return (
    <div className="dashboard">
      {data && (
        <>
          <div className="dashboard-left">
            <ProfileMini user={data.user} />
            <GraphMini stats={data.stats} />
            {/* <GraphMini stats={stats} /> */}
          </div>
          <div className="dashboard-right">
            <p className="dashboard-title">라이딩 통계 요약</p>
            <Graph stat={data.stats} />
            {/* <Graph stat={stats} /> */}
            <p className="dashboard-title">라이딩 알림</p>
            <NotiBoard noti={data.notifications} />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
