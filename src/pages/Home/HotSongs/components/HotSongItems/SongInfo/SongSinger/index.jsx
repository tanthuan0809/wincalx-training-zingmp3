// lib import
import React from "react";

// import conponent

// import style
import "./style.scss";

/**
 * SongSinger - describe a song title
 * @param { string } singer // song title
 */

const SongSinger = ({ singer }) => {
  return <div className="song-signer-wraper">{singer}</div>;
};

export default SongSinger;
