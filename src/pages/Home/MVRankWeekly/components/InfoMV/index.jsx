// libs import
import React from "react";

// components
import NameMV from "../NameMV";
import SingerMV from "../SingerMV";
import ViewerMV from "../ViewerMV";

// style
import "./style.scss";

/**
 * InfoMV - infomation mv
 */

const InfoMV = () => {
  return (
    <div className="info-mv-wrapper">
      <NameMV />
      <SingerMV />
      <ViewerMV />
    </div>
  );
};

export default InfoMV;
