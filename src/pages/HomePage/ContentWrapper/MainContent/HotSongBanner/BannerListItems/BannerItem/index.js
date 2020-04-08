import React from "react";

const BannerItem = ({ banner }) => {
  return (
    <div className="banner-item">
      <img alt="img" src={banner.url} />
    </div>
  );
};

export default BannerItem;
