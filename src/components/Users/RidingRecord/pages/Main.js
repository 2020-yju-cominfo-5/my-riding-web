import React, { useState, useEffect } from "react";
import Title from "../../../item/Title";
import "./Main.css";

import "react-dropdown/style.css";
import { getRidingRecordByYear } from "../../../../api/RidingRecord";
import RecordMainHeader from "../items/Main/RecordMainHeader";
// import RecordMainChartTitle from "../items/Main/RecordMainChartTitle";
import RecordMainChartContens from "../items/Main/RecordMainChartContens";

const Main = () => {
  const currentYear = new Date().getFullYear();
  const years = [`${currentYear}`, `${currentYear - 1}`, `${currentYear - 2}`];
  const [year, setYear] = useState(years[0]);
  const [prevYear, setPrevYear] = useState();
  const [stats, setStats] = useState([]);
  const [label, setLabel] = useState();

  useEffect(() => {
    // TODO 에러 시 예외 처리 추가
    getRidingRecordByYear(year)
      .then((res) => {
        // TODO NO DATA 알고리즘 추가 필요 -> 해당 년도에 등록된 라이딩 기록이 없습니다.
        const { stats } = res.data;
        if (stats.length === 0) {
          setYear(prevYear);
          alert(`${year}년에 등록된 라이딩 일지가 없습니다.`);
          return;
        }
        setStats(stats, ...stats);
      })
      .catch((err) => {
        console.log(err);
        if (!err.response) {
          alert("서버와의 연결에 실패하였습니다.");
          return;
        }
        console.log(err.response);
        alert("라이딩 일지를 가져오는데 실패하였습니다.");
      });
  }, [year]);

  const yearChangeHandler = ({ value }) => {
    setStats([]);
    setPrevYear(year);
    setYear(value);
  };
  const header = {
    years,
    year,
    yearChangeHandler,
  };

  return (
    <>
      <Title title="라이딩 일지" />
      <div className="record-main">
        <RecordMainHeader data={header} setLabel={setLabel} />
        <div className="chart-section">
          {/* <RecordMainChartTitle year={year} /> */}
          <RecordMainChartContens year={year} stats={stats} label={label} />
        </div>
      </div>
    </>
  );
};

export default Main;
