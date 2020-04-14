// libs import
import React from "react";

// components
import SongNameTop3Chart from "../SongNameTop3Chart";
import SingerNameTop3Chart from "../SingerNameTop3Chart";

// style
import "./style.scss";

/**
 * SongInfoTop3Chart - song infomation
 * @param { string } name - song name
 */

const SongInfoTop3Chart = ({ name }) => {
  return (
    <div className="song-info-top-3-chart-wrapper">
      <SongNameTop3Chart name={name} />
      <SingerNameTop3Chart singer="Unknown" />
    </div>
  );
};

export default SongInfoTop3Chart;
