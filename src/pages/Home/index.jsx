// libs import
import React from "react";

// components
import HotSongBanners from "./HotSongBanners";
import SongRanking from "./SongRanking";

/**
 * Home - home page
 */

const Home = () => {
  return (
    <div className="home">
      <HotSongBanners />
      <SongRanking />
    </div>
  );
};

export default Home;
