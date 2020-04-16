// lib import
import React from "react";

// import conponent
import AlbumName from "../AlbumName";
import AlbumSinger from "../AlbumSinger";
// import style
import "./style.scss";

/**
 * AlbumHotInfo - describe a hot album information
 *
 */

const AlbumHotInfo = () => {
  return (
    <div className="album-hot-info">
      <AlbumName albumName="Name of album" />
      <AlbumSinger singer="Singer" />
    </div>
  );
};

export default AlbumHotInfo;
