// libs import
import React from "react";

// components
import TitleHeader from "../../components/TitleHeder";
import PlayIcon from "../../components/PlayIcon";

// style
import "./style.scss";

/**
 * HeaderMVRank - header
 */

const HeaderMVRank = () => {
  return (
    <div className="header-mv-rank-wrapper">
      <TitleHeader title="#ZINGCHART TUẦN - MV" />
      <PlayIcon />
    </div>
  );
};

export default HeaderMVRank;
