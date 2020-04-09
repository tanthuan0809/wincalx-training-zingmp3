import React from "react";

const HotSongsItem = ({ src }) => {
  return (
    <div className="hot-songs-item">
      <img alt="img-example" src={src} />
      <div className="hot-songs-item__title">
        <span>Title of song </span>
        <br />
        <span>artist</span>
      </div>
    </div>
  );
};

export default HotSongsItem;
