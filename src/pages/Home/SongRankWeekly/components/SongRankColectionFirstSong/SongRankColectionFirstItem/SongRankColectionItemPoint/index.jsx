// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * SongRankColectionItemPoint - description point of song
 * @param { number } point // point of song
 */

const SongRankColectionItemPoint = ({ point }) => {
  return <div className="song-rank-colection-item-point-wrapper">{point}</div>;
};

export default SongRankColectionItemPoint;
