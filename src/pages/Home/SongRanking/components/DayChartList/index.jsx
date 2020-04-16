// libs import
import React from "react";

// components
import DayChart from "../DayChart";

// style
import "./style.scss";

/**
 * DayChartList - days list
 */

const DayChartList = () => {
  const dayArray = Array.from(Array(30).keys());
  return (
    <div className="day-chart-list-wrapper">
      {dayArray.map((day) => (
        <DayChart key={day} day={day} />
      ))}
    </div>
  );
};

export default DayChartList;
