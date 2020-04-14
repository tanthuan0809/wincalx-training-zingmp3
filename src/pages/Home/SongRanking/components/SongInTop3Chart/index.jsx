// libs import
import React from "react";

// components
import PercentTop3Chart from "../PercentTop3Chart";
import ThumbnailTop3Chart from "../ThumbnailTop3Chart";
import SongInfoTop3Chart from "../SongInfoTop3Chart";
import TopNumberTop3Chart from "../TopNumberTop3Chart";

// style
import "./style.scss";

/**
 * SongInTop3Chart - Chart line top
 * @param { object } song - Song infomation
 */

// eslint-disable-next-line no-unused-vars
const SongInTop3Chart = ({ song }) => {
  return (
    <div className="song-in-top-3-chart-wrapper">
      <TopNumberTop3Chart top={song.id} />
      <ThumbnailTop3Chart thumbnail={song.thumbnailUrl} />
      <SongInfoTop3Chart name={song.title} />
      <PercentTop3Chart percent="50%" top={song.id} />
    </div>
  );
};

export default SongInTop3Chart;
