// libs import
import React from "react";

// components
import HotSongBanners from "./HotSongBanners";
import SongRanking from "./SongRanking";
import MusicForYou from "./MusicForYou";
/**
 * Home - home page
 */

const Home = () => {
  return (
    <div className="home">
      <HotSongBanners />
      <SongRanking />
      <section>
        <MusicForYou />
      </section>
    </div>
  );
};

export default Home;
