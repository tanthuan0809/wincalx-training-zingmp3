// libs import
import React from "react";

// components
import HotSongBanners from "./HotSongBanners";
import SongRanking from "./SongRanking";
import HotSongs from "./HotSongs";
import AlbumHot from "./AlbumHot";
import MusicNew from "./MusicNew";
import MusicForYou from "./MusicForYou";
import SongRankWeekly from "./SongRankWeekly";
import HotTheme from "./HotTheme";
import PartnerCompanies from "./PartnerCompanies";
import HotSinger from "./HotSinger";
import MVRankWeekly from "./MVRankWeekly";
import AlbumRankWeekly from "./AlbumRankWeekly";
import HotVideos from "./HotVideos";
import HotKeywordSocial from "./HotKeywordSocial";
// import style

// styles
import "./style.scss";

/**
 * Home - home page
 */

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-wraper-inner">
        <HotSongBanners />
        <SongRanking />
        <HotSongs />
        <MusicNew />
        <AlbumHot />
        <MusicForYou />
        <SongRankWeekly />
        <HotTheme />
        <PartnerCompanies />
        <HotSinger />
        <MVRankWeekly />
        <HotVideos />
        <HotKeywordSocial />
        <AlbumRankWeekly />
      </div>
    </div>
  );
};

export default Home;
