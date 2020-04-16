// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * ImageVideo - image video
 * @param { string } url - link image
 */

const ImageVideo = ({ url = "https://via.placeholder.com/200x150/92c952" }) => {
  return (
    <div className="image-video-wrapper">
      <img src={url} alt="img" />
    </div>
  );
};

export default ImageVideo;
