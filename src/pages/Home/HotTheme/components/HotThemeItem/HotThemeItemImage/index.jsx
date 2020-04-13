// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * HotThemeItemImage - description image of an item of hot them list
 * @param { string } src // source of an image
 */

const HotThemeItemImage = ({ src }) => {
  return (
    <div className="hot-them-item-image-wrapper">
      <img src={src} alt="" />
    </div>
  );
};

export default HotThemeItemImage;
