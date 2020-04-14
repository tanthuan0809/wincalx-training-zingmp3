// libs import
import React from "react";

// components
import ChartLineTop from "../../components/ChartLineTop";
import Top3Ranking from "../../components/Top3Ranking";
import HeaderTop3Chart from "../../components/HeaderTop3Chart";

// style
import "./style.scss";

/**
 * ChartRanking - Chart Ranking
 */

const ChartRanking = () => {
  return (
    <div className="chart-ranking-wrapper">
      <div className="chart-ranking-wrapper-inner">
        <HeaderTop3Chart />
        <ChartLineTop />
        <Top3Ranking />
      </div>
    </div>
  );
};

export default ChartRanking;
