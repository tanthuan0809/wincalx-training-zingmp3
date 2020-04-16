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
import HotVideos from "./HotVideos";
// import style
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
        <section className="home-wrapper-section__1 ">
          <HotSongs />
          <MusicNew />
        </section>
        <section className="home-wrapper-section__2 ">
          <AlbumHot />
        </section>
        <section>
          <MusicForYou />
        </section>
        <section>
          <SongRankWeekly />
        </section>
        <section>
          <HotTheme />
        </section>
        <section>
          <PartnerCompanies />
        </section>
        <section>
          <HotSinger />
        </section>
        <MVRankWeekly />
        <HotVideos />
      </div>
    </div>
  );
};

export default Home;
