// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * SongRankColectionItemRankNumber - description rank number of song
 * @param { number } rankNumber // rankNumber of song
 */

const SongRankColectionItemRankNumber = ({ rankNumber }) => {
  return (
    <div className="song-rank-colection-item-rank-number-wrapper">
      {rankNumber}
    </div>
  );
};

export default SongRankColectionItemRankNumber;
