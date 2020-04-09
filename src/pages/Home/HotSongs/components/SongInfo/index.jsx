// lib import
import React from "react";

// import conponent
import SongTitle from "../SongTitle";
import SongSinger from "../SongSinger";
// import style
import "./style.scss";

/**
 * SongInfo - describe a song information
 *
 */

const SongInfo = () => {
  return (
    <div className="hot-songs-item-info">
      <SongTitle songName="Name of song" />
      <SongSinger singer="Singer" />
    </div>
  );
};

export default SongInfo;
