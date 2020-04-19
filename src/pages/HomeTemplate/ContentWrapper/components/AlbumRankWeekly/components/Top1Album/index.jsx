// libs import
import React from "react";

// components
import NameMV from "../NameMV";
import SingerMV from "../SingerMV";
import ViewerMV from "../ViewerMV";

// style
import "./style.scss";

/**
 * Top1MV - description top 1 MV
 */

const Top1MV = () => {
  const Top1Number = () => {
    return <div className="top-1-number">01</div>;
  };
  const InfoTop1 = () => {
    return (
      <div className="info-top-1">
        <NameMV />
        <SingerMV />
      </div>
    );
  };
  return (
    <div className="top-1-mv-wrapper">
      <div
        className="top-1-mv-wrapper-inner"
        style={{
          backgroundImage: "url(https://via.placeholder.com/300/92c952)"
        }}
      >
        <div className="top-1-mv">
          <Top1Number />
          <InfoTop1 />
          <ViewerMV />
        </div>
      </div>
    </div>
  );
};

export default Top1MV;
