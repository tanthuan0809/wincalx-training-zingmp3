// libs import
import React from "react";

// style
import "./style.scss";

/**
 * MusicForYouThumbnail - description thumbnail of music for you
 * @param { string } src //source of thumbnail
 */

const MusicForYouThumbnail = ({ src }) => {
  return (
    <div className="music-for-you-thumbnail-wrapper">
      <img alt="" src={src} />
    </div>
  );
};

export default MusicForYouThumbnail;
