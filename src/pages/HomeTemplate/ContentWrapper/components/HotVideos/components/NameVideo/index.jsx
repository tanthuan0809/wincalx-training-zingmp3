// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * NameVideo - name video
 * @param { string } name - name video
 */

const NameVideo = ({ name = "This name of video" }) => {
  return (
    <div className="name-video-wrapper">
      <div className="name-video">{name}</div>
    </div>
  );
};

export default NameVideo;
