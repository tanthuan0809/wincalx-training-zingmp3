// libs import
import React from "react";

// components
import SongRankColectionFirstSong from "../../components/SongRankColectionFirstSong";
import SongRankColectionList from "../../components/SongRankColectionList";
import SongRankWeeklyCountrySelector from "../../components/SongRankWeeklyCountrySelector";
// style
import "./style.scss";

/**
 * SongRankWeeklyColection - description song rank weekly colection component
 */

const SongRankWeeklyColection = () => {
  return (
    <div className="song-rank-weekly-colection-wrapper">
      <div className="song-rank-weekly-colection-wrapper-inner">
        <SongRankWeeklyCountrySelector />
        <SongRankColectionFirstSong />
        <SongRankColectionList />
      </div>
    </div>
  );
};

export default SongRankWeeklyColection;
