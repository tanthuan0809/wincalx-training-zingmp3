// libs
import React from "react";

// components
import SongInTopList from "../../components/SongInTopList";

// style
import "./style.scss";

/**
 * TopSongInRanking - Top Song In Ranking
 */

const TopSongInRanking = () => {
  return (
    <div className="top-song-in-ranking-wrapper">
      <div className="top-song-in-ranking-wrapper-inner">
        <SongInTopList />
      </div>
    </div>
  );
};

export default TopSongInRanking;
