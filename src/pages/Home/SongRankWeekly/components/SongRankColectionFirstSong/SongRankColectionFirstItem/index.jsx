// libs import
import React from "react";

// components
import SongRankColectionItemInfo from "./SongRankColectionItemInfo";
import SongRankColectionItemPoint from "./SongRankColectionItemPoint";
import SongRankColectionItemRankNumber from "./SongRankColectionRankNumber";
// style
import "./style.scss";

/**
 * SongRankColectionItem - description the first item of song rank list
 * @param { object } song // song object include infomation of song
 */

const SongRankColectionFirstItem = ({ song }) => {
  return (
    <div className="song-rank-colection-first-item-wrapper">
      <div className="song-rank-colection-first-item-wrapper-inner">
        <SongRankColectionItemRankNumber rankNumber={song.id} />
        <SongRankColectionItemInfo />
        <SongRankColectionItemPoint point={1.41} />
      </div>
    </div>
  );
};

export default SongRankColectionFirstItem;
