import React, { useEffect, useState } from "react";
import axios from "axios";

// COMPONENTS
import BannerItem from "./BannerItem";

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
      {banners.map((banner) => (
        <BannerItem banner={banner} />
      ))}
    </div>
  );
};

export default BannerListItems;
