// libs import
import React from "react";

// components
import HotSongBanners from "./HotSongBanners";
import SongRanking from "./SongRanking";
import HotTheme from "./HotTheme";
/**
 * Home - home page
 */

const Home = () => {
  return (
    <div className="home">
      <HotSongBanners />
      <SongRanking />
      <section>
        <HotTheme />
      </section>
    </div>
  );
};

export default Home;
