// libs import
import React from "react";

// components
import SongRankColectionItemInfoSinger from "../SongRankColectionItemInfoSinger";
import SongRankColectionItemInfoSong from "../SongRankColectionItemSong";

// style
import "./style.scss";

/**
 * SongRankColectionItemInfo - description a song infomation
 */

const SongRankColectionItemInfo = () => {
  return (
    <div className="song-rank-colection-item-info-wrapper">
      <div className="song-rank-colection-item-info-wrapper-inner">
        <SongRankColectionItemInfoSong song="Name of song" />
        <SongRankColectionItemInfoSinger singer="Singer" />
      </div>
    </div>
  );
};

export default SongRankColectionItemInfo;
