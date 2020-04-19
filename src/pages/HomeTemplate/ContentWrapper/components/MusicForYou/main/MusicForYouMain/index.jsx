// libs import
import React from "react";

// components
import MusicForYouContent from "../../components/MusicForYouContent";
import MusicForYouThumbnail from "../../components/MusicForYouThumbnail";

// style
import "./style.scss";

/**
 * MusicForYouMain - description main component of music for you
 */

const MusicForYouMain = () => {
  return (
    <div className="music-for-you-main-wrapper">
      <div className="music-for-you-main-wrapper-inner">
        <MusicForYouThumbnail src="https://via.placeholder.com/100/92c952" />
        <MusicForYouContent />
      </div>
    </div>
  );
};

export default MusicForYouMain;
