// libs import
import React from "react";

// components
import SongRankWeeklyTitle from "./main/SongRankWeeklyTitle";
import SongRankWeeklyColection from "./main/SongRankWeeklyColection";
// style
import "./style.scss";

/**
 * SongRankWeekly - description song rank weekly component
 */

const SongRankWeekly = () => {
  return (
    <div className="song-rank-weekly-wrapper">
      <div className="song-rank-weekly-wrapper-inner">
        <SongRankWeeklyTitle title="Song Rank Weekly" />
        <SongRankWeeklyColection />
      </div>
    </div>
  );
};

export default SongRankWeekly;
