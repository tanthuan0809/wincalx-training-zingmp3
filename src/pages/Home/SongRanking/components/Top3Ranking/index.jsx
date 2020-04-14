// libs import
import React from "react";

// components
import SongListInTop3Chart from "../SongListInTop3Chart";

// style
import "./style.scss";

/**
 * Top3Ranking - Top 3 Song in ranking
 */

const Top3Ranking = () => {
  return (
    <div className="top-3-ranking-wrapper">
      <SongListInTop3Chart />
    </div>
  );
};

export default Top3Ranking;
