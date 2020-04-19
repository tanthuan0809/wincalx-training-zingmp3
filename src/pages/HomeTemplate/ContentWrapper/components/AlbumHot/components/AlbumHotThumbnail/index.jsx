// lib import
import React from "react";

// import style
import "./style.scss";

/**
 * AlbumHotThumbnail - describe a hot album thumbnail
 * @param { string } src // hot album thumbnail source
 */

const AlbumHotThumbnail = ({ src }) => {
  return (
    <div className="album-hot-thumbnail-wraper">
      <img alt="img" src={src} />
    </div>
  );
};

export default AlbumHotThumbnail;
