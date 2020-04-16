// libs import
import React from "react";

// components
import HotSongBanners from "./HotSongBanners";
import SongRanking from "./SongRanking";
import HotVideos from "./HotVideos";

/**
 * Home - home page
 */

const Home = () => {
  return (
    <div className="home">
      <HotSongBanners />
      <SongRanking />
      <HotVideos />
    </div>
  );
};

export default Home;
