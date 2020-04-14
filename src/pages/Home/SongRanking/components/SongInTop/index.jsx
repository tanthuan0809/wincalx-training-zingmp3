// libs import
import React from "react";

// components
import TopNumber from "../TopNumber";
import Divider from "../Divider";
import SongTop from "../SongTop";
import SongOption from "../SongOption";
import SongNumberViewer from "../SongNumberViewer";

// style
import "./style.scss";

/**
 * SongInTop - top song
 * @param { object } song - song infomation
 */

const SongInTop = ({ song }) => {
  return (
    <div className="song-in-top-wrapper">
      <TopNumber top={song.id} />
      <Divider />
      <SongTop song={song} />
      <SongOption />
      <SongNumberViewer viewerNumber="50,000" />
    </div>
  );
};

export default SongInTop;
