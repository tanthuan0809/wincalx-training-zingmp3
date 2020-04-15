// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * SingerVideo - singer of video
 * @param { string } name - singer of video
 */

const SingerVideo = ({ name = "Unknown" }) => {
  return (
    <div className="singer-video-wrapper">
      <div className="singer-video">{name}</div>
    </div>
  );
};

export default SingerVideo;
