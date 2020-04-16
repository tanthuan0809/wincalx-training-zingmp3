// libs import
import React from "react";

// components

// style
import "./style.scss";

/**
 * SongNameTop3Chart - Song name in top 3
 * @param { string } name - song name
 */

const SongNameTop3Chart = ({ name }) => {
  return (
    <div className="song-name-top-3-chart-wrapper">
      <div className="name">{name}</div>
    </div>
  );
};

export default SongNameTop3Chart;
