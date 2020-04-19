// libs import
import React from "react";
import { Icon } from "antd";

// components

// style
import "./style.scss";

/**
 * SongOption - song option
 * @param { boolean } haveMV - have mv ?
 */

const SongOption = ({ haveMV }) => {
  return (
    <div className="song-option-wrapper">
      {haveMV && <Icon type="play-square" />}
      <Icon type="download" />
      <Icon type="plus" />
      <Icon type="share-alt" />
    </div>
  );
};

export default SongOption;
