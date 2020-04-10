// lib import
import React from "react";

// import conponent
import AlbumHotThumbnail from "../AlbumHotThumbnail";
import AlbumHotInfo from "../AlbumHotInfo";

// import style
import "./style.scss";

/**
 * AlbumHotItem - component describe a album
 * @param { object } album // source of a album item inclues title, singer, thumbnail source
 */

const AlbumHotItem = ({ album }) => {
  return (
    <div className="album-hot-item-wrapper">
      <div className="album-hot-item-wrapper-inner">
        <AlbumHotThumbnail src={album.url} />
        <AlbumHotInfo />
      </div>
    </div>
  );
};

export default AlbumHotItem;
