import React from "react";
import { Link } from "react-router-dom";

import "./RouteInfo.css";

const RouteInfo = ({ id }) => {
  // TODO axios
  const { name, startAddress, endAddress, distance, time, path } = {
    name: "아양교 ~ 공항교 라이딩",
    startAddress: "대구 동구 검사동 아양교",
    endAddress: "대구 동구 효동로2길 72 동촌유원지",
    distance: "3.2km",
    time: "000분",
    path: [
      { lat: 35.185689, lng: 129.071681 },
      { lat: 35.185749, lng: 129.071722 },
      { lat: 35.185798, lng: 129.071758 },
      { lat: 35.185864, lng: 129.071804 },
      { lat: 35.185946, lng: 129.071863 },
      { lat: 35.186017, lng: 129.071916 },
      { lat: 35.186093, lng: 129.071971 },
      { lat: 35.186173, lng: 129.072024 },
      { lat: 35.186256, lng: 129.072079 },
      { lat: 35.186341, lng: 129.072138 },
      { lat: 35.186427, lng: 129.072199 },
      { lat: 35.186513, lng: 129.072265 },
      { lat: 35.186599, lng: 129.072335 },
      { lat: 35.186688, lng: 129.072402 },
      { lat: 35.186781, lng: 129.072468 },
      { lat: 35.186871, lng: 129.072531 },
      { lat: 35.186963, lng: 129.072594 },
      { lat: 35.187052, lng: 129.072659 },
      { lat: 35.187139, lng: 129.072726 },
      { lat: 35.187205, lng: 129.072774 },
      { lat: 35.187271, lng: 129.072822 },
      { lat: 35.187402, lng: 129.072918 },
      { lat: 35.187499, lng: 129.072981 },
      { lat: 35.187589, lng: 129.073049 },
      { lat: 35.187682, lng: 129.073117 },
      { lat: 35.187771, lng: 129.073182 },
      { lat: 35.187866, lng: 129.073246 },
      { lat: 35.187945, lng: 129.073315 },
      { lat: 35.188023, lng: 129.073387 },
      { lat: 35.188099, lng: 129.073461 },
      { lat: 35.188177, lng: 129.073539 },
      { lat: 35.188254, lng: 129.073618 },
      { lat: 35.188336, lng: 129.073699 },
      { lat: 35.188417, lng: 129.073784 },
      { lat: 35.188495, lng: 129.073877 },
      { lat: 35.188569, lng: 129.073976 },
      { lat: 35.188638, lng: 129.074081 },
      { lat: 35.188703, lng: 129.074188 },
      { lat: 35.188764, lng: 129.074296 },
      { lat: 35.188826, lng: 129.074411 },
      { lat: 35.188886, lng: 129.074506 },
      { lat: 35.188946, lng: 129.074611 },
      { lat: 35.189008, lng: 129.074712 },
      { lat: 35.189074, lng: 129.074812 },
      { lat: 35.189139, lng: 129.074911 },
      { lat: 35.189189, lng: 129.074988 },
      { lat: 35.189261, lng: 129.075107 },
      { lat: 35.189317, lng: 129.075208 },
      { lat: 35.189375, lng: 129.075306 },
      { lat: 35.189436, lng: 129.075401 },
      { lat: 35.189496, lng: 129.075494 },
      { lat: 35.189556, lng: 129.075586 },
      { lat: 35.189617, lng: 129.075681 },
      { lat: 35.189674, lng: 129.075774 },
      { lat: 35.189728, lng: 129.075868 },
      { lat: 35.189783, lng: 129.075963 },
      { lat: 35.189824, lng: 129.076037 },
      { lat: 35.189888, lng: 129.076149 },
      { lat: 35.189946, lng: 129.076239 },
      { lat: 35.189994, lng: 129.076311 },
      { lat: 35.190061, lng: 129.076415 },
      { lat: 35.190117, lng: 129.076507 },
      { lat: 35.190175, lng: 129.076611 },
      { lat: 35.190233, lng: 129.076692 },
      { lat: 35.190291, lng: 129.076781 },
      { lat: 35.190337, lng: 129.076854 },
      { lat: 35.190409, lng: 129.076961 },
      { lat: 35.190469, lng: 129.077052 },
      { lat: 35.190528, lng: 129.077146 },
      { lat: 35.190586, lng: 129.077241 },
      { lat: 35.190647, lng: 129.077334 },
      { lat: 35.190693, lng: 129.077411 },
      { lat: 35.190766, lng: 129.077523 },
      { lat: 35.190828, lng: 129.077615 },
      { lat: 35.190892, lng: 129.077705 },
      { lat: 35.190957, lng: 129.077796 },
      { lat: 35.191028, lng: 129.077884 },
      { lat: 35.191102, lng: 129.077968 },
      { lat: 35.191178, lng: 129.078047 },
      { lat: 35.191256, lng: 129.078122 },
      { lat: 35.191337, lng: 129.078193 },
      { lat: 35.191423, lng: 129.078255 },
      { lat: 35.191515, lng: 129.078312 },
      { lat: 35.191605, lng: 129.078368 },
      { lat: 35.191693, lng: 129.078423 },
      { lat: 35.191782, lng: 129.078477 },
      { lat: 35.191869, lng: 129.078532 },
      { lat: 35.191955, lng: 129.078584 },
      { lat: 35.192043, lng: 129.078634 },
      { lat: 35.192131, lng: 129.078682 },
      { lat: 35.192219, lng: 129.078731 },
      { lat: 35.192307, lng: 129.078781 },
      { lat: 35.192394, lng: 129.078831 },
      { lat: 35.192481, lng: 129.078879 },
      { lat: 35.192566, lng: 129.078926 },
      { lat: 35.192649, lng: 129.078972 },
      { lat: 35.192731, lng: 129.079018 },
      { lat: 35.192812, lng: 129.079066 },
      { lat: 35.192892, lng: 129.079117 },
      { lat: 35.192966, lng: 129.079169 },
      { lat: 35.193031, lng: 129.079223 },
      { lat: 35.193082, lng: 129.079274 },
      { lat: 35.193124, lng: 129.079317 },
      { lat: 35.193163, lng: 129.079354 },
      { lat: 35.193203, lng: 129.079395 },
      { lat: 35.193242, lng: 129.079441 },
      { lat: 35.193278, lng: 129.079492 },
      { lat: 35.193316, lng: 129.079551 },
      { lat: 35.193352, lng: 129.079615 },
      { lat: 35.193391, lng: 129.079681 },
      { lat: 35.193428, lng: 129.079745 },
      { lat: 35.193478, lng: 129.079814 },
      { lat: 35.193519, lng: 129.079851 },
      { lat: 35.193579, lng: 129.079875 },
      { lat: 35.193643, lng: 129.079888 },
      { lat: 35.193705, lng: 129.079898 },
      { lat: 35.193763, lng: 129.079916 },
      { lat: 35.193817, lng: 129.079933 },
      { lat: 35.193876, lng: 129.079941 },
      { lat: 35.193943, lng: 129.079942 },
      { lat: 35.194007, lng: 129.079947 },
      { lat: 35.194079, lng: 129.079951 },
      { lat: 35.194154, lng: 129.079956 },
      { lat: 35.194229, lng: 129.079964 },
      { lat: 35.194311, lng: 129.079977 },
      { lat: 35.194369, lng: 129.079993 },
      { lat: 35.194441, lng: 129.080009 },
      { lat: 35.194513, lng: 129.080026 },
      { lat: 35.194589, lng: 129.080045 },
      { lat: 35.194667, lng: 129.080066 },
      { lat: 35.194747, lng: 129.080089 },
      { lat: 35.194831, lng: 129.080112 },
      { lat: 35.194911, lng: 129.080133 },
      { lat: 35.194994, lng: 129.080153 },
      { lat: 35.195078, lng: 129.080168 },
      { lat: 35.195158, lng: 129.080178 },
      { lat: 35.195239, lng: 129.080184 },
      { lat: 35.195321, lng: 129.080192 },
      { lat: 35.195403, lng: 129.080198 },
      { lat: 35.195485, lng: 129.080201 },
      { lat: 35.195565, lng: 129.080206 },
      { lat: 35.195644, lng: 129.080209 },
      { lat: 35.195743, lng: 129.080205 },
      { lat: 35.193546, lng: 129.066684 },
      { lat: 35.193459, lng: 129.066714 },
      { lat: 35.193371, lng: 129.066743 },
      { lat: 35.193281, lng: 129.066772 },
      { lat: 35.193193, lng: 129.066804 },
      { lat: 35.193103, lng: 129.066839 },
      { lat: 35.193014, lng: 129.066873 },
      { lat: 35.192928, lng: 129.066904 },
      { lat: 35.192842, lng: 129.066931 },
      { lat: 35.192758, lng: 129.066957 },
      { lat: 35.192676, lng: 129.066982 },
      { lat: 35.192596, lng: 129.067012 },
      { lat: 35.192513, lng: 129.067041 },
      { lat: 35.192426, lng: 129.067072 },
      { lat: 35.192341, lng: 129.067111 },
      { lat: 35.192257, lng: 129.067125 },
      { lat: 35.192174, lng: 129.067151 },
      { lat: 35.192092, lng: 129.067176 },
      { lat: 35.192013, lng: 129.067202 },
      { lat: 35.191934, lng: 129.067229 },
      { lat: 35.191858, lng: 129.067254 },
      { lat: 35.191783, lng: 129.067278 },
      { lat: 35.191711, lng: 129.067297 },
      { lat: 35.191641, lng: 129.067314 },
      { lat: 35.191577, lng: 129.067336 },
      { lat: 35.191518, lng: 129.067362 },
      { lat: 35.191465, lng: 129.067386 },
      { lat: 35.191414, lng: 129.067409 },
      { lat: 35.191367, lng: 129.067431 },
      { lat: 35.191321, lng: 129.067454 },
      { lat: 35.191274, lng: 129.067474 },
      { lat: 35.191228, lng: 129.067493 },
      { lat: 35.191181, lng: 129.067511 },
      { lat: 35.191131, lng: 129.067525 },
      { lat: 35.191085, lng: 129.067537 },
      { lat: 35.191038, lng: 129.067556 },
      { lat: 35.190992, lng: 129.067589 },
      { lat: 35.190947, lng: 129.067632 },
      { lat: 35.190911, lng: 129.067686 },
      { lat: 35.190886, lng: 129.067751 },
      { lat: 35.190879, lng: 129.067822 },
      { lat: 35.190872, lng: 129.067896 },
      { lat: 35.190868, lng: 129.067972 },
      { lat: 35.190868, lng: 129.068048 },
      { lat: 35.190867, lng: 129.068124 },
      { lat: 35.190864, lng: 129.068202 },
      { lat: 35.190861, lng: 129.068281 },
      { lat: 35.190854, lng: 129.068361 },
      { lat: 35.190845, lng: 129.068441 },
      { lat: 35.190834, lng: 129.068521 },
      { lat: 35.190824, lng: 129.068598 },
      { lat: 35.190814, lng: 129.068678 },
      { lat: 35.190811, lng: 129.068761 },
      { lat: 35.190785, lng: 129.068845 },
      { lat: 35.190765, lng: 129.068929 },
      { lat: 35.190741, lng: 129.069014 },
      { lat: 35.190711, lng: 129.069099 },
      { lat: 35.190678, lng: 129.069181 },
      { lat: 35.190641, lng: 129.069261 },
      { lat: 35.190603, lng: 129.069341 },
      { lat: 35.190562, lng: 129.069426 },
      { lat: 35.190521, lng: 129.069513 },
      { lat: 35.190479, lng: 129.069607 },
      { lat: 35.190437, lng: 129.069708 },
      { lat: 35.190394, lng: 129.069811 },
      { lat: 35.190348, lng: 129.069917 },
      { lat: 35.190296, lng: 129.070024 },
      { lat: 35.190239, lng: 129.070136 },
      { lat: 35.190182, lng: 129.070249 },
      { lat: 35.190124, lng: 129.070366 },
      { lat: 35.190064, lng: 129.070485 },
      { lat: 35.190008, lng: 129.070603 },
      { lat: 35.189941, lng: 129.070746 },
      { lat: 35.189881, lng: 129.070864 },
      { lat: 35.189835, lng: 129.070961 },
      { lat: 35.189778, lng: 129.071078 },
      { lat: 35.189723, lng: 129.071197 },
      { lat: 35.189668, lng: 129.071314 },
    ],
  };

  return (
    <div className="route-info">
      <div className="left">
        <div className="wrapper">
          <div className="name">{name}</div>
          <ul>
            <li>
              <div className="title">출발지</div>
              <div className="value">{startAddress}</div>
            </li>
            <li>
              <div className="title">도착지</div>
              <div className="value">{endAddress}</div>
            </li>
            <li>
              <div className="title">거리</div>
              <div className="value">{distance}</div>
              <div className="title">시간</div>
              <div className="value">{time}</div>
            </li>
          </ul>
        </div>
        <Link to={`/route/show/${id}`} className="show-btn">
          라이딩 경로 정보 상세보기 &gt;
        </Link>
      </div>
      <div className="right">[{id}] 지도 정보입니다.</div>
    </div>
  );
};

export default RouteInfo;
