// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * HotSingerItem - description a item of hot singer list
 * @param { object } singer // singer object include information of singer
 */

const HotSingerItem = ({ singer }) => {
  return (
    <div className="hot-singer-item-wrapper">
      <img src={singer.url} alt="" />
    </div>
  );
};

export default HotSingerItem;
