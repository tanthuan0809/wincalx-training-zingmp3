// lib import
import React from "react";

// import conponent

// import style
import "./style.scss";

/**
 * AlbumName - describe a album name
 * @param { string } albumName // Name of album
 */

const AlbumName = ({ albumName }) => {
  return <div className="album-name-wraper">{albumName}</div>;
};

export default AlbumName;
