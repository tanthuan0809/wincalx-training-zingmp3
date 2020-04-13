// lib import
import React from "react";

// import conponent

// import style
import "./style.scss";

/**
 * SongThumbnail - describe a song thumbnail
 * @param { string } src // song thumbnail source
 */

const SongThumbnail = ({ src }) => {
  return (
    <div className="song-thumbnail-wraper">
      <img alt="img" src={src} />
    </div>
  );
};

export default SongThumbnail;
