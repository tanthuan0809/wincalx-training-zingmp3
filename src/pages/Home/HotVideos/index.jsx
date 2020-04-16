// libs import
import React from "react";

// components
import TitleVideoHot from "./mains/TitleVideoHot";
import ListVideoHot from "./mains/ListVideoHot";

// style
import "./style.scss";

/**
 * HotVideos - description
 */

const HotVideos = () => {
  return (
    <div className="hot-videos-wrapper">
      <TitleVideoHot />
      <ListVideoHot />
    </div>
  );
};

export default HotVideos;
