import React from "react";
import HotSongsList from "./HotSongsList";
import "./hot-songs.scss";
const HotSongs = () => {
  return (
    <div className="hot-songs-container">
      <HotSongsList className="hot-song-wraper__1" />
      <HotSongsList className="hot-song-wraper__2" />
    </div>
  );
};

export default HotSongs;
