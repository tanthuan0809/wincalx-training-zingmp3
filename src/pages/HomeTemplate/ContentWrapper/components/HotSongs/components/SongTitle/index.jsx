// lib import
import React from "react";

// import conponent

// import style
import "./style.scss";

/**
 * SongTitle - describe a song title
 * @param { string } songName // Name of song
 */

const SongTitle = ({ songName }) => {
  return <div className="song-title-wraper">{songName}</div>;
};

export default SongTitle;
