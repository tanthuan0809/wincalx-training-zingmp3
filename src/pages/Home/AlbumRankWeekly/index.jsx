// libs import
import React from "react";

// components
import HeaderMVRank from "./mains/HeaderMVRank";
import ContentMVRank from "./mains/ContentMVRank";

// style
import "./style.scss";

/**
 * AlbumRankWeekly - album rank
 */

const AlbumRankWeekly = () => {
  return (
    <div className="mv-rank-weekly-wrapper">
      <HeaderMVRank />
      <ContentMVRank />
    </div>
  );
};

export default AlbumRankWeekly;
