// libs import
import React from "react";

// components
import HotSongBanners from "../../components/HotSongBanners";
import SongRanking from "../../components/SongRanking";
import HotKeywordSocial from "../../components/HotKeywordSocial";
import HotVideos from "../../components/HotVideos";
import HotSongs from "../../components/HotSongs";
import HotSinger from "../../components/HotSinger";
import AlbumHot from "../../components/AlbumHot";

// style
import "./style.scss";

/**
 * MainContent - description main content section of home page
 */

const MainContents = () => {
  return (
    <div className="main-contents-wrapper">
      <div className="main-contents-wrapper-inner">
        <HotSongBanners />
        <SongRanking />
        <HotKeywordSocial />
        <HotVideos />
        <AlbumHot />
        <HotSongs />
        <HotSinger />
      </div>
    </div>
  );
};

export default MainContents;
