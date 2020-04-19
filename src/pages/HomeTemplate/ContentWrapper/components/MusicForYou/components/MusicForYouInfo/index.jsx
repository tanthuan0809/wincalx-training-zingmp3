// libs import
import React from "react";

// style
import "./style.scss";

/**
 * MusicForYouInfo - description infomation of music for you
 * @param { string } info // infomation of music for you
 */

const MusicForYouInfo = ({ info }) => {
  return <div className="music-for-you-info-wrapper">{info}</div>;
};

export default MusicForYouInfo;
