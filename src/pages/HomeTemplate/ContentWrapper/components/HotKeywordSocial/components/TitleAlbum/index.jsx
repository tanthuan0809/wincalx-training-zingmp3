// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * TitleAlbum - title of album
 * @param { string } title - title of album
 */

const TitleAlbum = ({ title }) => {
  return (
    <div className="title-album-wrapper">
      <div className="title-album">{title}</div>
    </div>
  );
};

export default TitleAlbum;
