// lib import
import React from "react";

// import style
import "./style.scss";

/**
 * HotNewInfo - describe a hot new infomation
 * @param { string } hotNewInfo // hot new information
 */

const HotNewInfo = ({ hotNewInfo }) => {
  return <div className="hot-new-info-wraper">{hotNewInfo}</div>;
};

export default HotNewInfo;
