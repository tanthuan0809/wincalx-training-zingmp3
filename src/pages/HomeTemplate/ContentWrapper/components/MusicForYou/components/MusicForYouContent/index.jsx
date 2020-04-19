// libs import
import React from "react";

// components
import MusicForYouTitle from "../MusicForYouTitle";
import MusicForYouInfo from "../MusicForYouInfo";

// style
import "./style.scss";

/**
 * MusicForYouContent - description title and info of music for you
 *
 */

const MusicForYouContent = () => {
  return (
    <div className="music-for-you-content-wrapper">
      <div className="music-for-you-content-wrapper-inner">
        <MusicForYouTitle title="Music for you" />
        <MusicForYouInfo info="Info of music for you" />
      </div>
    </div>
  );
};

export default MusicForYouContent;
