import React from "react";
import BannerListItems from "./BannerListItems";
import MainBanner from "./MainBanner";

import "./hot-song-banner.scss";

const HotSongBanner = () => {
  return (
    <div className="banner-song">
      <MainBanner />
      <BannerListItems />
    </div>
  );
};

export default HotSongBanner;
