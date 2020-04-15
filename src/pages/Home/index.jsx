// libs import
import React from "react";

// components
import HotSongBanners from "./HotSongBanners";
import SongRanking from "./SongRanking";
import HotKeywordSocial from "./HotKeywordSocial";

// styles
import "./style.scss";

/**
 * Home - home page
 */

const Home = () => {
  return (
    <div className="home">
      <HotSongBanners />
      <SongRanking />
      <HotKeywordSocial />
    </div>
  );
};

export default Home;
