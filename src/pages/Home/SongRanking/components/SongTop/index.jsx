// libs import
import React from "react";

// components
import SongThumbnail from "../SongThumbnail";
import SongInFo from "../SongInFo";

// style
import "./style.scss";

/**
 * SongTop - top song
 * @param { object } song - song infomation
 */

const SongTop = ({ song }) => {
  return (
    <div className="song-top-wrapper">
      <SongThumbnail thumbnail={song.thumbnailUrl} />
      <SongInFo songName={song.title} singerName="Unknown" />
    </div>
  );
};

export default SongTop;
