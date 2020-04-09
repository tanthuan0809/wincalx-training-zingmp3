// libs import
import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import BannerItem from "../../components/BannerItem";

/**
 * BannerListItems - List banner
 */

const BannerListItems = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/photos?_limit=5"
    })
      .then((res) => {
        setBanners(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  });
  return (
    <div className="banner-item-wrapper">
      <div className="banner-item-wrapper-inner">
        {banners.map((banner) => (
          <BannerItem banner={banner} />
        ))}
      </div>
    </div>
  );
};

export default BannerListItems;
