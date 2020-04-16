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
    <div className="hot-songs-wraper">
      <div className="hot-songs-wraper-inner">
        <div className="hot-song-wraper-inner__1">
          <HotSongTitles title="Title" />
          <HotSongList />
        </div>
        <div className="hot-song-wraper-inner__2">
          <HotSongTitles title="Title" />
          <HotSongList />
        </div>
      </div>
    </div>
  );
};

export default HotSongs;
