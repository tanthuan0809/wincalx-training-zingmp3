// lib import
import React from "react";

// import style
import "./style.scss";

/**
 * HotNewThumbnail - describe a hot music new thumbnail
 * @param { string } src //  hotmusic new thumbnail source
 */

const HotNewThumbnail = ({ src }) => {
  return (
    <div className="hot-new-thumbnail-wraper">
      <img alt="img" src={src} />
    </div>
  );
};

export default HotNewThumbnail;
