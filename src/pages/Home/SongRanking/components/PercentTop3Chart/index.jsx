// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * PercentTop3Chart - percent in top 3
 * @param { string } percent - percent of song
 */

const PercentTop3Chart = ({ percent }) => {
  return (
    <div className="percent-top-3-chart-wrapper">
      <div className="percet">{percent}</div>
    </div>
  );
};

export default PercentTop3Chart;
