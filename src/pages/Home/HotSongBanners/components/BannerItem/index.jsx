// libs import
import React from "react";

// style
import "./style.scss";

/**
 * @param {object} banner - transmisson in banner item info
 */

const BannerItem = ({ banner }) => {
  return (
    <div className="banner-item-wrapper">
      <img alt="img" src={banner.url} />
    </div>
  );
};

export default BannerItem;
