// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * HotThemeItemContent - description content of a item of hot them list
 * @param { string } content // content of a item of hot them list
 */

const HotThemeItemContent = ({ content }) => {
  return <div className="hot-them-item-content-wrapper">{content}</div>;
};

export default HotThemeItemContent;
