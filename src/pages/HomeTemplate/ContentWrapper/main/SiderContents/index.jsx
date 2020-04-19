// libs import
import React from "react";

// components
import MusicForYou from "../../components/MusicForYou";
import HotTheme from "../../components/HotTheme";
import SongRankWeekly from "../../components/SongRankWeekly";
import MVRankWeekly from "../../components/MVRankWeekly";
import AlbumRankWeekly from "../../components/AlbumRankWeekly";
import MusicNew from "../../components/MusicNew";

// style
import "./style.scss";

/**
 * SiderContents - description
 */

const SiderContents = () => {
  return (
    <div className="sider-contents-wrapper">
      <div className="sider-contents-wrapper-inner">
        <MusicForYou />
        <HotTheme />
        <SongRankWeekly />
        <MVRankWeekly />
        <AlbumRankWeekly />
        <MusicNew />
      </div>
    </div>
  );
};

export default SiderContents;
