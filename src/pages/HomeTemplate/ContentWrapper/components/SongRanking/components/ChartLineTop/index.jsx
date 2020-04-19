// libs import
import React from "react";

// components
import DayChartList from "../DayChartList";

// style
import "./style.scss";

/**
 * ChartLineTop - Chart line top
 */

const ChartLineTop = () => {
  return (
    <div className="chart-line-top-wrapper">
      <div className="chart-line">
        <img src="https://via.placeholder.com/800x400/92c952" alt="img" />
      </div>
      <DayChartList />
    </div>
  );
};

export default ChartLineTop;
