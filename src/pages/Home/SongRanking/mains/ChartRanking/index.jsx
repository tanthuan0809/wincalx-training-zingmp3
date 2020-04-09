// libs import
import React from "react";

// components
import ChartLineTop from "../../components/ChartLineTop";
import Top3Ranking from "../../components/Top3Ranking";

// style
import "./style.scss";

/**
 * ChartRanking - Chart Ranking
 */

const ChartRanking = () => {
  return (
    <div className="chart-ranking-wrapper">
      <div className="chart-ranking-wrapper-inner">
        <ChartLineTop />
        <Top3Ranking />
      </div>
    </div>
  );
};

export default ChartRanking;
