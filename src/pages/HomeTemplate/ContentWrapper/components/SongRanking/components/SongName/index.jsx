// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * SongName - song name
 * @param { string } name - name of song
 */

const SongName = ({ name }) => {
  return (
    <div className="song-name-wrapper">
      <div className="name">{name}</div>
    </div>
  );
};

export default SongName;
