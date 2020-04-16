// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * SongRankColectionItemInfoSinger - description
 * @param { string } singer //name of singer
 */

const SongRankColectionItemInfoSinger = ({ singer }) => {
  return (
    <div className="song-rank-colection-item-info-singer-wrapper">{singer}</div>
  );
};

export default SongRankColectionItemInfoSinger;
