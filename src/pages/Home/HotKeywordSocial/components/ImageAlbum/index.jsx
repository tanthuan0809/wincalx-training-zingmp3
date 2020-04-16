// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * ImageAlbum - image of Album
 * @param { string } image - link image
 */

const ImageAlbum = ({ image }) => {
  return (
    <div className="image-album-wrapper">
      <img src={image} alt="img" />
    </div>
  );
};

export default ImageAlbum;
