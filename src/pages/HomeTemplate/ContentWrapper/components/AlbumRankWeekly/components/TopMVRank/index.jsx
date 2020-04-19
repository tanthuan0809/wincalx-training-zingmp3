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

const TopMVRank = () => {
  const className = classnames({
    "top-mv-rank-wrapper": true
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
