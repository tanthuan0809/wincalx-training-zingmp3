// lib import
import React from "react";

// import style
import "./style.scss";

/**
 * AlbumSinger - describe a singer of album
 * @param { string } singer // album singer
 */

const AlbumSinger = ({ singer }) => {
  return <div className="album-signer-wraper">{singer}</div>;
};

export default AlbumSinger;
