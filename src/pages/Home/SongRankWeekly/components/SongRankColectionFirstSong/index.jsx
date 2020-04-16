// libs import
import React from "react";

// components
import SongRankColectionFirstItem from "./SongRankColectionFirstItem";
import SongRankColectionFirstSongImage from "./SongRankColectionFirstSongImage";

// style
import "./style.scss";

// example data
const song = {
  id: 1
};
/**
 * SongRankColectionFirstSong - description a backgroud image of song rank colection
 */

const SongRankColectionFirstSong = () => {
  return (
    <div className="song-rank-colection-first-song-wrapper">
      <SongRankColectionFirstSongImage src="https://via.placeholder.com/250x150/92c952" />
      <SongRankColectionFirstItem song={song} />
    </div>
  );
};

export default SongRankColectionFirstSong;
