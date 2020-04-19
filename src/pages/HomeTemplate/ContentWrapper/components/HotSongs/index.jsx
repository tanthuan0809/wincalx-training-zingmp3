// libs import
import React from "react";

// import components
import HotSongList from "./main/HotSongList";
import HotSongTitles from "./main/HotSongListTitles";

// import style
import "./style.scss";

/**
 * HotSongs - HotSongs component
 */

const HotSongs = () => {
  return (
    <div className="hot-songs-wrapper">
      <div className="hot-songs-wrapper-inner">
        <div className="hot-songs-wrapper-inner__1">
          <HotSongTitles title="Title" />
          <HotSongList />
        </div>
        <div className="hot-songs-wrapper-inner__2">
          <HotSongTitles title="Title" />
          <HotSongList />
        </div>
      </div>
    </div>
  );
};

export default HotSongs;
