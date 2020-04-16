// libs import
import React from "react";

// components
import MusicForYouMain from "./main/MusicForYouMain";
// style
import "./style.scss";

/**
 * MusicForYou - description compoennt music for you with background
 */

const MusicForYou = () => {
  return (
    <div className="music-for-you-wrapper">
      <div className="music-for-you-wrappeer-inner">
        <MusicForYouMain />
      </div>
    </div>
  );
};

export default MusicForYou;
