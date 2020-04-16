// lib import
import React from "react";

// import conponent
import MusicNewItemInfo from "./MuiscNewItemInfo";
import MusicNewItamThumbnail from "./MuiscNewItemThumbnail";

// import style
import "./style.scss";

/**
 * MusicNewItem - component describe a music new
 * @param { object } musicNew // source of a music new  inclues title, infomation
 */

const MusicNewItem = ({ musicNew }) => {
  return (
    <div className="music-new-item-wrapper">
      <div className="music-new-item-wrapper-inner">
        <MusicNewItamThumbnail src={musicNew.url} />
        <MusicNewItemInfo info="Infomation of music new" />
      </div>
    </div>
  );
};

export default MusicNewItem;
