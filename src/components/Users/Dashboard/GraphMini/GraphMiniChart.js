import React from "react";
import "./GraphMiniChart.css";

const GraphMiniChart = ({ data }) => {
  const dataSet = Array.from({ length: 7 }, () => 0);

  const size = Math.max.apply(
    Math,
    data.map(function(ele) {
      return ele.value / 10;
    }),
  );
  data.map((ele) => {
    const idx = ele.day ? ele.day - 1 : 6;
    dataSet[idx] = Math.round(ele.value / size);
  });

  return (
    <div className="chart">
      <ul className="data">
        {dataSet.map((ele, idx) => {
          return (
            <li key={idx} className="line-x">
              <ul className="stat">
                {(() => {
                  const array = [];
                  for (let i = 1; i <= 10; i++) {
                    const bar =
                      i <= 10 - ele ? (
                        <li key={i}></li>
                      ) : (
                        <li key={i} className="activate"></li>
                      );
                    array.push(bar);
                  }
                  return array;
                })()}
              </ul>
            </li>
          );
        })}
      </ul>
      <ul className="label">
        <li className="line-x">월</li>
        <li className="line-x">화</li>
        <li className="line-x">수</li>
        <li className="line-x">목</li>
        <li className="line-x">금</li>
        <li className="line-x">토</li>
        <li className="line-x">일</li>
      </ul>
    </div>
  );
};

export default GraphMiniChart;
