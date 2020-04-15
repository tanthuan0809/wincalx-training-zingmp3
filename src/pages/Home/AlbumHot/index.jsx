// libs import
import React from "react";

// import components
import AlbumHotList from "./main/AlbumHotList";
import AlbumHotTitle from "./main/AlbumHotTitle";

// import style
import "./sytle.scss";

/**
 * AlbumHot - AlbumHot component
 */

const AlbumHot = () => {
  return (
    <div className="album-hot-wraper">
      <div className="album-hot-wraper-inner">
        <AlbumHotTitle title="Album Hot" />
        <AlbumHotList />
      </div>
    </div>
  );
};

export default AlbumHot;
