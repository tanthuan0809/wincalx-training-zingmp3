// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * SongRankColectionFirstSongImage - description image of first song colection
 * @param { string } src // source of image
 */

const SongRankColectionFirstSongImage = ({ src }) => {
  return (
    <div className="song-rank-colection-first-song-image-wrapper">
      <img src={src} alt="" />
    </div>
  );
};

export default SongRankColectionFirstSongImage;
