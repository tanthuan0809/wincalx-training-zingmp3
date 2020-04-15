// libs import
import React from "react";
import classnames from "classnames";

// components
import ImageMV from "../ImageMV";
import TopNumberMVRank from "../TopNumberMV";
import InfoMV from "../InfoMV";

// style
import "./style.scss";

/**
 * TopMVRank - top mv
 */

const TopMVRank = ({ top }) => {
  const className = classnames({
    "top-mv-rank-wrapper": true,
    top1: top === 0 && true
  });
  return (
    <div className={className}>
      <ImageMV />
      <InfoMV />
      <TopNumberMVRank />
    </div>
  );
};

export default TopMVRank;
