// libs import
import React from "react";

// components
import HashtagChart from "../HashtagChart";
import TimeUpdateChart from "../TimeUpdateChart";
import ShareIcon from "../ShareIcon";

// style
import "./style.scss";

/**
 * HeaderTop3Chart - header chart
 */

const HeaderTop3Chart = () => {
  return (
    <div className="header-top-3-chart-wrapper">
      <HashtagChart />
      <TimeUpdateChart time="09/04/2020 15:10" />
      <ShareIcon />
    </div>
  );
};

export default HeaderTop3Chart;
