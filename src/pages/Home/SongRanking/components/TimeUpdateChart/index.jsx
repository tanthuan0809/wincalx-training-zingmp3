// libs import
import React from "react";
import { Icon } from "antd";

// components

// style
import "./style.scss";

/**
 * TimeUpdateChart - time update chart
 * @param { moment } time - time update chart
 */

const TimeUpdateChart = ({ time }) => {
  return (
    <div className="time-update-chart-wrapper">
      <p>{time}</p>
      <Icon type="play-circle" />
    </div>
  );
};

export default TimeUpdateChart;
