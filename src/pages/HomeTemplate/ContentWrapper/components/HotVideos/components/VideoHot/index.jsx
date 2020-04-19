// libs import
import React from "react";

// components

// style
import "./style.scss";
import ImageVideo from "../ImageVideo";
import NameVideo from "../NameVideo";
import SingerVideo from "../SingerVideo";

/**
 * VideoHot - video hot
 * @param { object } video - video infomation
 */

const VideoHot = () => {
  return (
    <div className="video-hot-wrapper">
      <ImageVideo />
      <NameVideo />
      <SingerVideo />
    </div>
  );
};

export default VideoHot;
