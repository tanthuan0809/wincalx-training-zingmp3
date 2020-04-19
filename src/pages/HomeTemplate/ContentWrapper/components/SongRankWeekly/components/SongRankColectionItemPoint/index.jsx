// libs import
import React from "react";

// style
import "./style.scss";

/**
 * SongRankColectionItemPoint - description point of song
 * @param { number } point // point of song
 */

const SongRankColectionItemPoint = ({ point }) => {
  return <div className="song-rank-colection-item-point">{point}</div>;
};

export default SongRankColectionItemPoint;
