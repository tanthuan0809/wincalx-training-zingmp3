// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * SingerNameTop3Chart - Singer name in top 3
 * @param { string } singer - singer name
 */

const SingerNameTop3Chart = ({ singer }) => {
  return (
    <div className="singer-name-top-3-chart-wrapper">
      <div className="singer">{singer}</div>
    </div>
  );
};

export default SingerNameTop3Chart;
