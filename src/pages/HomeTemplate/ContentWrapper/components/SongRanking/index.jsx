// libs
import React from "react";

// components
import ChartRanking from "./mains/ChartRanking";
import TopSongInRanking from "./mains/TopSongListInRanking";

// style
import "./style.scss";

/**
 * SongRanking - top ranking song
 */

const SongRanking = () => {
  return (
    <div className="song-ranking-wrapper">
      <ChartRanking />
      <TopSongInRanking />
    </div>
  );
};

export default SongRanking;
