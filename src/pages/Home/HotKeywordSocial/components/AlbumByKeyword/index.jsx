// libs import
import React from "react";

// components
import ImageAlbum from "../ImageAlbum";
import TitleAlbum from "../TitleAlbum";

// style
import "./style.scss";

/**
 * AlbumByKeyword - album by keyword
 * @param { object } album - album infomation
 */

const AlbumByKeyword = ({ album }) => {
  return (
    <div className="album-by-keyword-wrapper">
      <ImageAlbum image={album.thumbnailUrl} />
      <TitleAlbum title={album.title} />
    </div>
  );
};

export default AlbumByKeyword;
