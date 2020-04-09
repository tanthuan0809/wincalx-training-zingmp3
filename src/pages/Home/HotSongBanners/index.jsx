// libs import
import React from "react";

// components
import BannerListItems from "./mains/BannerListItems";
import MainBanner from "./mains/MainBanner";

// style
import "./style.scss";

/**
 * Home - Home Page component
 */

const HotSongBanners = () => {
  return (
    <div className="hot-song-banners">
      <MainBanner />
      <BannerListItems />
    </div>
  );
};

export default HotSongBanners;
