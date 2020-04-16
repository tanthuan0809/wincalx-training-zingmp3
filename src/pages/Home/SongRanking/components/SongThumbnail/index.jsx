// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * SongThumbnail - thumbnail of song
 * @param { string } thumbnail - thumbnail of song
 */

const SongThumbnail = ({ thumbnail }) => {
  return (
    <div className="song-thumbnail-wrapper">
      <img src={thumbnail} alt="img" />
    </div>
  );
};

export default SongThumbnail;
