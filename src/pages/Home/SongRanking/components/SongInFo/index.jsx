// libs import
import React from "react";

// components

// style
import "./style.scss";
import SongName from "../SongName";
import SingerName from "../SingerName";

/**
 * SongInFo - infomation of song
 * @param { string } songName
 * @param { string } singerName
 */

const SongInFo = ({ songName, singerName }) => {
  return (
    <div className="song-info-wrapper">
      <SongName name={songName} />
      <SingerName name={singerName} />
    </div>
  );
};

export default SongInFo;
