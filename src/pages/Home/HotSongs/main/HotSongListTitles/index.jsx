// lib import
import React from "react";

// import conponent

// import style
import "./style.scss";

/**
 * Hot Song List Title - describe a hot song list title
 * @param { string } title // hot song title
 */

const HotSongListTitles = ({ title }) => {
  return <div className="hot-songs-list-title-wraper">{title}</div>;
};

export default HotSongListTitles;
