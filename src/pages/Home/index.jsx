// libs import
import React from "react";

// components
import HotSongBanners from "./HotSongBanners";
import SongRanking from "./SongRanking";
import HotSinger from "./HotSinger";
/**
 * Home - home page
 */

const Home = () => {
  return (
    <div className="home">
      <HotSongBanners />
      <SongRanking />
      <section>
        <HotSinger />
      </section>
    </div>
  );
};

export default Home;
