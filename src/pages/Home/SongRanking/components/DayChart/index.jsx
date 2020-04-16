// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * DayChart - day of chart
 * @param { number } day - day of month
 */

const DayChart = ({ day }) => {
  return (
    <div className="day-chart-wrapper">
      <div className="day">{day + 1}</div>
    </div>
  );
};

export default DayChart;
