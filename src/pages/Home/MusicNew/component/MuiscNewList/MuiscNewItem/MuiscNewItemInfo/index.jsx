// lib import
import React from "react";

// import conponent

// import style
import "./style.scss";

/**
 * MusicNewItemInfo - describe a hot new infomation
 * @param { string } info // music new iteam information
 */

const MusicNewItemInfo = ({ info }) => {
  return <div className="music-new-item-info-wraper">{info}</div>;
};

export default MusicNewItemInfo;
