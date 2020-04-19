// libs import
import React from "react";

// components
import HotThemeItemContent from "../HotThemeItemContent";
// style
import "./style.scss";

/**
 * HotThemeItem - description a item of hot them list
 * @param { object } item // object item include source of item image and content
 */

const HotThemeItem = ({ item }) => {
  return (
    <div className="hot-theme-item-wrapper">
      <div
        className="hot-theme-item-wrapper-inner"
        style={{ backgroundImage: `url(${item.url})` }}
      >
        <HotThemeItemContent content="Content" />
      </div>
    </div>
  );
};

export default HotThemeItem;
