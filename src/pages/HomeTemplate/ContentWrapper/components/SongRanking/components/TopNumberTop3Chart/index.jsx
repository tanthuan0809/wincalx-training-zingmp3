// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * TopNumberTop3Chart - Top number in chart
 * @param { number } top - top number
 */

const TopNumberTop3Chart = ({ top }) => {
  return (
    <div className="top-number-top-3-chart-wrapper">
      <div className={`top top-${top}`}>{`0${top}`}</div>
    </div>
  );
};

export default TopNumberTop3Chart;
