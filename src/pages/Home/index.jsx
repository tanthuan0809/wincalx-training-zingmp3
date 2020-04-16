// libs import
import React from "react";

// components
import HotSongBanners from "./HotSongBanners";
import SongRanking from "./SongRanking";
import MusicNew from "./MusicNew";
/**
 * Home - home page
 */

const Home = () => {
  return (
    <div className="home">
      <HotSongBanners />
      <SongRanking />
      <section>
        <MusicNew />
      </section>
    </div>
  );
};

export default Home;
