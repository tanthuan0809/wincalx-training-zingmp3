// lib import
import React from "react";

// import style
import "./style.scss";

/**
 * MusicNewItemThumbnail - describe a music new thumbnail
 * @param { string } src // music new thumbnail source
 */

const MusicNewItemThumbnail = ({ src }) => {
  return (
    <div className="music-new-item-thumbnail-wraper">
      <img alt="img" src={src} />
    </div>
  );
};

export default MusicNewItemThumbnail;
