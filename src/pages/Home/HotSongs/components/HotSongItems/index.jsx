// lib import
import React from "react";

// import conponent
import SongThumbnail from "./SongThumbnail";
import SongInfo from "./SongInfo";

// import style
import "./style.scss";

/**
 * HotSongItem - component describe a song
 * @param { object } song // source of a song item inclues title, singer, thumbnail source
 */

const HotSongItem = ({ song }) => {
  return (
    <div className="hot-songs-item-wrapper">
      <div className="hot-songs-item-wrapper-inner">
        <SongThumbnail src={song.url} />
        <SongInfo />
      </div>
    </div>
  );
};

export default HotSongItem;
